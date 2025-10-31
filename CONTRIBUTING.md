# Beitragen zu TirzeCalc.de

Vielen Dank für Ihr Interesse, zu TirzeCalc.de beizutragen! Hier finden Sie Informationen, wie Sie sich beteiligen können.

## 🐛 Fehler melden

Wenn Sie einen Fehler gefunden haben, erstellen Sie bitte ein Issue mit folgenden Informationen:

- **Beschreibung**: Klare und präzise Beschreibung des Problems
- **Schritte zur Reproduktion**: Schritt-für-Schritt-Anleitung zur Reproduktion des Fehlers
- **Erwartetes Verhalten**: Was haben Sie erwartet?
- **Tatsächliches Verhalten**: Was ist tatsächlich passiert?
- **Screenshots**: Wenn möglich, Screenshots hinzufügen
- **Umgebung**: Browser, Betriebssystem, Version

## 💡 Neue Funktionen vorschlagen

Für neue Funktionen oder Verbesserungen:

1. Überprüfen Sie zunächst, ob bereits ein ähnliches Issue existiert
2. Beschreiben Sie detailliert die gewünschte Funktion
3. Erklären Sie den Nutzen und die Anwendungsfälle
4. Fügen Sie bei Bedarf Mockups oder Beispiele hinzu

## 🔧 Entwicklungsumgebung einrichten

1. Repository forken und klonen
```bash
git clone https://github.com/IHR_USERNAME/TirzeCalc.de.git
cd TirzeCalc.de
```

2. Lokalen Webserver starten
```bash
# Mit Python
python -m http.server 8000

# Oder mit Node.js
npx http-server
```

3. Änderungen vornehmen und testen

## 📝 Pull Requests

1. Erstellen Sie einen Feature-Branch: `git checkout -b feature/meine-neue-funktion`
2. Committen Sie Ihre Änderungen: `git commit -m 'Beschreibung der Änderungen'`
3. Pushen Sie den Branch: `git push origin feature/meine-neue-funktion`
4. Erstellen Sie einen Pull Request

### Pull Request Guidelines

- Beschreiben Sie klar, was geändert wurde und warum
- Fügen Sie Screenshots für UI-Änderungen hinzu
- Stellen Sie sicher, dass der Code den bestehenden Stilrichtlinien folgt
- Testen Sie Ihre Änderungen in verschiedenen Browsern

## 🎨 Code-Stil

- Verwenden Sie semantisches HTML5
- Folgen Sie den CSS-Best-Practices im vorhandenen Code
- Verwenden Sie moderne JavaScript-Features (ES6+)
- Halten Sie den Code sauber und gut dokumentiert

## 📄 Übersetzungen

Das Projekt unterstützt Deutsch und Englisch. Für neue Übersetzungen:

1. Fügen Sie die neuen Texte zum `translations`-Objekt in [`script.js`](script.js) hinzu
2. Testen Sie die Übersetzungen in beiden Sprachen

## 📞 Fragen?

Bei Fragen können Sie:
- Ein Issue erstellen
- Den Projektbetreuer direkt kontaktieren

Vielen Dank für Ihre Beiträge! 🙏