# TirzeCalc.de - Mounjaro Dosierungsrechner

Ein einfacher und benutzerfreundlicher Web-Rechner zur Berechnung der benötigten Injektionsschritte ("Klicks") für Mounjaro Pens.

## 🚀 Funktionen

- **Pen-Stärke Auswahl**: Unterstützt alle gängigen Pen-Stärken (2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, 15mg)
- **Präzise Dosis-Berechnung**: Berechnung in 1.25mg Schritten
- **Mehrsprachigkeit**: Deutsch und Englisch
- **Dark/Light Mode**: Anpassbare Darstellung
- **Responsive Design**: Optimiert für Desktop und Mobile
- **Progressive Web App (PWA)**: Kann als App installiert werden

## 🛠️ Technologie

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Responsive Design mit CSS Grid/Flexbox
- **Features**: Dark Mode, Local Storage, PWA Manifest
- **Browser Support**: Moderne Browser (Chrome, Firefox, Safari, Edge)

## 📦 Installation

Das Projekt erfordert keine spezielle Installation. Einfach die Dateien auf einem Webserver bereitstellen:

```bash
# Repository klonen
git clone https://github.com/staubi82/TirzeCalc.de.git

# In den Projektordner wechseln
cd TirzeCalc.de

# Dateien auf Webserver hochladen
```

Alternativ kann die Anwendung lokal geöffnet werden:
```bash
# Mit Python 3
python -m http.server 8000

# Oder mit Node.js
npx http-server
```

## 🎯 Verwendung

1. **Pen-Stärke wählen**: Klicken Sie auf die gewünschte Pen-Stärke (2.5mg - 15mg)
2. **Dosis einstellen**: Verwenden Sie den Schieberegler für die gewünschte Dosis (0.00mg - 15.00mg in 1.25mg Schritten)
3. **Ergebnis ablesen**: Die benötigte Anzahl an Klicks wird automatisch berechnet

## 📁 Projektstruktur

```
TirzeCalc.de/
├── index.html              # Hauptanwendung
├── script.js               # JavaScript-Logik
├── style.css               # Stylesheets
├── site.webmanifest        # PWA Manifest
├── impressum.html          # Impressum (Deutsch)
├── impressum_en.html       # Impressum (Englisch)
├── datenschutz.html        # Datenschutz (Deutsch)
├── datenschutz_en.html     # Datenschutz (Englisch)
├── favicon.ico             # Favicon
├── favicon.svg             # SVG Favicon
├── apple-touch-icon.png    # iOS App Icon
├── web-app-manifest-*.png  # PWA Icons
└── README.md               # Diese Datei
```

## 🌐 Live Version

Die Live-Version ist verfügbar unter: [https://tirzecalc.de](https://tirzecalc.de)

## ⚠️ Wichtiger Hinweis

**Dieser Rechner dient nur zu Informationszwecken.** Die berechneten Werte sind keine medizinische Beratung und ersetzen nicht die Konsultation eines Arztes oder Apothekers.

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) Datei für Details.

## 👨‍💻 Entwickler

- **Thomas Straub** - [GitHub](https://github.com/staubi82)

## 🤝 Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue für Verbesserungsvorschläge.

## 📞 Kontakt

- E-Mail: info@TirzeCalc.de
- GitHub: [staubi82](https://github.com/staubi82)