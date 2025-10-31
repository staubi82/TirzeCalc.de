# Sicherheitsrichtlinie

## Meldung von Sicherheitslücken

Wir nehmen die Sicherheit unserer Software ernst. Wenn Sie eine Sicherheitslücke in TirzeCalc.de entdecken, teilen Sie uns dies bitte mit, indem Sie eine verantwortungsvolle Offenlegung praktizieren.

**Bitte melden Sie Sicherheitslücken NICHT über öffentliche Issues.** Stattdessen kontaktieren Sie uns direkt per E-Mail unter **info@tirzecalc.de**.

Wir werden:

- Innerhalb von 7 Werktagen auf Ihre Meldung antworten
- Ihnen die Bestätigung des Empfangs der Meldung zukommen lassen
- Sie über den Fortschritt bei der Behebung der Sicherheitslücke auf dem Laufenden halten

## Unterstützte Versionen

| Version | Unterstützt          |
| ------- | -------------------- |
| 1.0.x   | :white_check_mark:   |

## Sicherheitsrelevante Aspekte

TirzeCalc.de ist eine statische Webanwendung, die ausschließlich im Browser des Benutzers läuft. Es werden keine Benutzerdaten auf externen Servern gespeichert.

### Datenschutz

- **Lokaler Speicher**: Die Anwendung verwendet `localStorage` um die Spracheinstellung und den Dark Mode zu speichern. Diese Daten verbleiben auf dem Gerät des Benutzers.
- **Keine externen APIs**: Es werden keine externen APIs aufgerufen oder Daten an Dritte übertragen.
- **Keine Tracking-Cookies**: Die Anwendung verwendet keine Cookies für Tracking-Zwecke.

### Externe Abhängigkeiten

Die Anwendung hat keine externen Abhängigkeiten (keine npm-Pakete, keine CDNs). Alle Skripte und Stylesheets sind lokal.

## Verantwortungsvolle Offenlegung

Wir schätzen die Bemühungen von Sicherheitsforschern, die uns bei der Verbesserung der Sicherheit helfen. Wir werden alle Beiträge anerkennen, sofern gewünscht.

## Updates und Patches

Sicherheitsupdates werden in den Release-Notes veröffentlicht. Bitte stellen Sie sicher, dass Sie die neueste Version verwenden.

## Kontakt

Für Sicherheitsfragen: **info@tirzecalc.de**