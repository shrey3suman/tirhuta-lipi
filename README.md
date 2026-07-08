# Mithilākṣar

<p align="center">

**A modern, open source Devanagari to Mithilākṣar (Tirhuta) Unicode transliteration tool.**

Preserving one of South Asia's historic writing systems through accessible, browser based software.

</p>

---

## Overview

Mithilākṣar is a Unicode transliteration tool that converts Devanagari text into the traditional **Mithilākṣar (Tirhuta)** script in real time.

While Unicode support for Tirhuta now exists, practical tools for typing and experimenting with the script remain limited. This project aims to lower that barrier by providing an intuitive browser interface that allows anyone familiar with Devanagari to begin writing in Mithilākṣar.

The project combines a custom transliteration engine with a lightweight web interface inspired by the visual heritage of Mithila.

---

## Live Demo

🌐 **https://tirhuta-lipi.web.app/**

---

## Why this project?

Although Tirhuta has an official Unicode block, digital adoption has remained limited due to the lack of accessible tooling.

Most Maithili speakers today read and type primarily in Devanagari. By providing live Unicode transliteration, Mithilākṣar offers a practical bridge between contemporary typing habits and the traditional script.

The long term goal is to contribute to the accessibility, preservation, and everyday digital use of Mithilākṣar.

---

## Features

- Live Devanagari to Mithilākṣar Unicode transliteration
- Instant copy to clipboard output
- Browser based interface with no installation required
- Responsive interface
- Unicode compliant output
- Heritage inspired visual design influenced by Madhubani art
- Open source development

---

## Technology

| Component | Technology |
| ---------- | ---------- |
| Front end | HTML, CSS, JavaScript |
| Transliteration | Custom JavaScript engine |
| Character Encoding | Unicode (Tirhuta Block U+11480 to U+114DF) |
| Hosting | Firebase Hosting |

---

## Project Structure

```text
tirhuta-lipi/

├── core/
│   └── Transliteration engine
│
├── web-demo/
│   ├── HTML
│   ├── CSS
│   ├── JavaScript
│   └── Assets
│
├── firebase.json
└── README.md
```

---

## Current Status

The project is under active development.

Current priorities include:

- Improving orthographic accuracy
- Expanding conjunct support
- Refining transliteration rules
- Improving accessibility
- Strengthening documentation

---

## Limitations

Mithilākṣar performs Unicode transliteration based on implemented mapping rules.

Certain inputs, including personal names, uncommon spellings, historical orthography, or context dependent forms, may require manual review.

Continued improvements will expand linguistic coverage over time.

---

## Roadmap

### v0.x

- Improved conjunct handling
- Better orthographic rules
- Mobile optimization
- Additional copy and export features
- Keyboard shortcuts

### v1.0

- Stable transliteration engine
- Comprehensive documentation
- Expanded linguistic support
- Public API
- Browser extension
- Dedicated typing keyboard

---

## Contributing

Suggestions, bug reports, corrections, and feature requests are welcome.

If you discover an issue with transliteration, please include:

- Input text
- Expected output
- Actual output
- Additional linguistic context, if applicable

---

## Design Philosophy

The interface intentionally follows a restrained visual style inspired by traditional Mithila manuscripts and Madhubani art.

Rather than recreating historical manuscripts directly, the design seeks to balance cultural inspiration with modern usability and readability.

---

## Credits

**Designed & Developed by**

**Shreya Suman**

Research • Transliteration Engine • Front end Development • UI/UX • Visual Design • Deployment

---

## License

This project is released under the **MIT License**.
