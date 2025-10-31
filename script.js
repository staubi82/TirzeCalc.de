const state = {
    selectedPenMG: null,
    desiredDoseMG: 0.0,
    language: 'de'
};

// Annahme: Alle Pens haben 60 Klicks.
const penData = {
    '2.5': { maxDose: 2.50, maxKicks: 60 },
    '5': { maxDose: 5.00, maxKicks: 60 },
    '7.5': { maxDose: 7.50, maxKicks: 60 },
    '10': { maxDose: 10.00, maxKicks: 60 },
    '12.5': { maxDose: 12.50, maxKicks: 60 },
    '15': { maxDose: 15.00, maxKicks: 60 }
};

// Die wählbaren Dosen (1.25mg Schritte)
const doseSteps = [
    0.00, 1.25, 2.50, 3.75, 5.00, 6.25, 7.50, 8.75,
    10.00, 11.25, 12.50, 13.75, 15.00
];

function updateSliderTicks(allowedDoses, currentIndex) {
    const sliderTicks = document.getElementById('sliderTicks');
    if (!sliderTicks) return;
    
    // Clear existing ticks
    sliderTicks.innerHTML = '';
    
    // Create ticks for each allowed dose
    allowedDoses.forEach((dose, index) => {
        const tick = document.createElement('div');
        tick.className = 'tick';
        if (index === currentIndex) {
            tick.classList.add('active');
        }
        sliderTicks.appendChild(tick);
    });
}

const translations = {
    de: {
        title: "TirzeCalc.de Dosierungsrechner",
        description: "Berechnen Sie die benötigten Injektionsschritte (\"Klicks\") für Ihre Pen-Stärke und die gewünschte Dosis (1.25 mg Schritte).",
        step_1: "1. Pen-Stärke wählen",
        step_2: "2. Gewünschte Dosis wählen",
        current_dose: "Aktuelle Dosis:",
        result_title: "Benötigte Klicks",
        result_note: "Wählen Sie zuerst Pen-Stärke und Dosis.",
        disclaimer: "Dieser Rechner dient nur zu Informationszwecken. Konsultieren Sie immer Ihren Arzt oder Apotheker.",
        'back-to-calculator': "← Zurück zum Rechner",
        'privacy-policy': "Datenschutz",
        'imprint': "Impressum",
        'selected_pen': "Ausgewählter Pen",
        'pen_strength': "Pen-Stärke",
        'per_click': "mg pro Klick",
        'privacy': "Datenschutz"
    },
    en: {
        title: "TirzeCalc.de Dosage Calculator",
        description: "Calculate the required injection steps (\"kicks\") based on your pen strength and desired dose (1.25 mg increments).",
        step_1: "1. Select Pen Strength",
        step_2: "2. Select Desired Dose",
        current_dose: "Current Dose:",
        result_title: "Required Kicks",
        result_note: "Please select Pen Strength and Dose first.",
        disclaimer: "This calculator is for informational purposes only. Always consult your doctor or pharmacist.",
        'back-to-calculator': "← Back to Calculator",
        'privacy-policy': "Privacy Policy",
        'imprint': "Imprint",
        'selected_pen': "Selected Pen",
        'pen_strength': "Pen Strength",
        'per_click': "mg per Click",
        'privacy': "Privacy"
    }
};


// --- Hauptlogik ---
function calculateKicks() {
    const penMg = state.selectedPenMG;
    const desiredDose = state.desiredDoseMG;
    const resultElement = document.getElementById('kicksResult');
    const noteElement = document.querySelector('.result-box p');

    if (!penMg || desiredDose === 0) {
        resultElement.textContent = 0;
        noteElement.textContent = translations[state.language].result_note;
        noteElement.style.color = 'var(--text-secondary)';
        return;
    }

    const data = penData[penMg];
    // Formel: Klicks = Runden(Gesamtklicks / Gesamtdosis * Gewünschte Dosis)
    const kicksPerMg = data.maxKicks / data.maxDose;
    let requiredKicks = Math.round(desiredDose * kicksPerMg);

    if (requiredKicks > data.maxKicks) {
        requiredKicks = data.maxKicks;
    }
    
    resultElement.textContent = requiredKicks;
    noteElement.textContent = translations[state.language].result_title; 
    noteElement.style.color = 'var(--text-primary)';
}


// --- UI und Event-Handler ---

function updateLanguage(lang) {
    state.language = lang;
    localStorage.setItem('language', lang); // Sprache im localStorage speichern

    // Seitentitel aktualisieren
    const pageTitle = document.title;
    if (pageTitle.includes('Impressum') || pageTitle.includes('Imprint')) {
        document.title = lang === 'de' ? 'Impressum - TirzeCalc.de' : 'Imprint - TirzeCalc.de';
    } else if (pageTitle.includes('Datenschutz') || pageTitle.includes('Privacy Policy')) {
        document.title = lang === 'de' ? 'Datenschutz - TirzeCalc.de' : 'Privacy Policy - TirzeCalc.de';
    } else if (pageTitle.includes('Dosierungsrechner') || pageTitle.includes('Dosage Calculator')) {
        document.title = lang === 'de' ? 'TirzeCalc.de - Mounjaro Dosierungsrechner' : 'TirzeCalc.de - Mounjaro Dosage Calculator';
    }

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-lang-link]').forEach(el => {
        const key = el.getAttribute('data-lang-link');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
            // Passe den href an, wenn es sich um Impressum oder Datenschutz handelt
            if (key === 'privacy-policy') {
                el.href = lang === 'de' ? 'datenschutz.html' : 'datenschutz_en.html';
            } else if (key === 'imprint') {
                el.href = lang === 'de' ? 'impressum.html' : 'impressum_en.html';
            } else if (key === 'back-to-calculator') {
                el.href = 'index.html';
            }
        }
    });

    const maxDose = state.selectedPenMG ? penData[state.selectedPenMG].maxDose : 15.00;
    const minDoseText = document.getElementById('minDoseText');
    const maxDoseText = document.getElementById('maxDoseText');

    if (minDoseText) {
        minDoseText.textContent = `${lang === 'de' ? 'Min' : 'Min'}: 0.00 mg`;
    }
    if (maxDoseText) {
        maxDoseText.textContent = `${lang === 'de' ? 'Max' : 'Max'}: ${maxDose.toFixed(2)} mg`;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active-lang');
        }
    });

    // Nur calculateKicks aufrufen, wenn die Elemente vorhanden sind (also auf index.html)
    if (document.getElementById('kicksResult')) {
        calculateKicks();
    }

    // Umleitung für Impressum und Datenschutz Seiten
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'impressum.html' && lang === 'en') {
        window.location.href = 'impressum_en.html';
        return;
    } else if (currentPage === 'impressum_en.html' && lang === 'de') {
        window.location.href = 'impressum.html';
        return;
    } else if (currentPage === 'datenschutz.html' && lang === 'en') {
        window.location.href = 'datenschutz_en.html';
        return;
    } else if (currentPage === 'datenschutz_en.html' && lang === 'de') {
        window.location.href = 'datenschutz.html';
        return;
    }
}


function handlePenSelection(event) {
    const button = event.target.closest('.pen-button');
    if (!button) return;

    document.querySelectorAll('.pen-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    state.selectedPenMG = button.getAttribute('data-mg');

    const maxDose = penData[state.selectedPenMG].maxDose;
    const doseSlider = document.getElementById('doseSlider');
    
    // Erlaubte Dosen basierend auf der Pen-Stärke filtern
    const allowedDoses = doseSteps.filter(dose => dose <= maxDose);

    // Slider-Range auf die Indices des gefilterten Dosis-Arrays setzen
    doseSlider.min = 0;
    doseSlider.max = allowedDoses.length - 1;
    doseSlider.step = "1";
    doseSlider.disabled = false;
    
    // Dosis-Wert und Slider-Position nach Auswahl neu setzen
    let currentDoseIndex = 0;
    let closestIndex = allowedDoses.findIndex(dose => dose === state.desiredDoseMG);
    
    if (closestIndex === -1 && state.desiredDoseMG > maxDose) {
        currentDoseIndex = allowedDoses.length - 1;
    } else if (closestIndex !== -1) {
        currentDoseIndex = closestIndex;
    }

    state.desiredDoseMG = allowedDoses[currentDoseIndex];
    doseSlider.value = currentDoseIndex;

    document.getElementById('currentDoseValue').textContent = state.desiredDoseMG.toFixed(2);
    document.getElementById('maxDoseText').textContent = `${state.language === 'de' ? 'Max' : 'Max'}: ${maxDose.toFixed(2)} mg`;

    // Update slider ticks
    updateSliderTicks(allowedDoses, currentDoseIndex);

    calculateKicks();
}

function handleDoseChange(event) {
    const index = parseInt(event.target.value);
    const penMg = state.selectedPenMG;
    const maxDose = penData[penMg].maxDose;
    
    const allowedDoses = doseSteps.filter(dose => dose <= maxDose);
    
    const dose = allowedDoses[index];
    state.desiredDoseMG = dose;
    document.getElementById('currentDoseValue').textContent = dose.toFixed(2);
    
    // Update slider ticks with current position
    updateSliderTicks(allowedDoses, index);
    
    calculateKicks();
}

function setupEventListeners() {
    // Nur Event-Listener für Elemente setzen, die existieren
    const penSelection = document.getElementById('penSelection');
    const doseSlider = document.getElementById('doseSlider');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (penSelection) {
        penSelection.addEventListener('click', handlePenSelection);
    }
    
    if (doseSlider) {
        doseSlider.addEventListener('input', handleDoseChange);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
            const isDarkMode = e.target.checked;
            document.body.classList.toggle('light-mode', !isDarkMode);
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        });
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Initialisiere Dark Mode basierend auf localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'disabled') {
        document.body.classList.add('light-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = false;
        }
    } else {
        document.body.classList.remove('light-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }

    // Initialisiere Sprache beim Laden der Seite
    const initialLang = localStorage.getItem('language') || 'de';
    updateLanguage(initialLang);
}

// Warte auf DOMContentLoaded bevor Event-Listener gesetzt werden
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
} else {
    setupEventListeners();
}