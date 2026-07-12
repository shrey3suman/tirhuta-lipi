# Tirhuta Unicode Transliterator

<p align="center">

**An open source Unicode transliteration tool for converting Devanagari text into Tirhuta (Mithilākṣar).**

Making one of South Asia's historic writing systems more accessible through modern, browser based software.

</p>

---

## Overview

Tirhuta Unicode Transliterator is an open source web application that converts Devanagari text into Unicode Tirhuta, also known as Mithilākṣar, in real time.

Although Tirhuta has been included in the Unicode Standard for several years, practical tools for writing the script digitally remain limited. Most Maithili speakers today are familiar with Devanagari, making it difficult to adopt Tirhuta for everyday digital communication.

This project aims to bridge that gap by providing a lightweight, browser based transliteration tool that generates standard Unicode Tirhuta output instantly.

The application combines a custom JavaScript transliteration engine with a clean, culturally inspired interface influenced by the visual traditions of "Madhubani Chitrakala".

---

## Live Demo

🌐 **https://tirhuta-lipi.web.app/**

---

## Why this project?

Digital preservation requires more than encoding a script into Unicode. It requires practical tools that people can use every day.

While Unicode support for Tirhuta exists, accessible transliteration tools remain scarce. This project allows users to continue typing in familiar Devanagari while producing Unicode compliant Tirhuta output that can be copied, shared, stored, and rendered across modern systems.

The long term objective is to contribute to the digital accessibility, preservation, and wider adoption of the Tirhuta script.

---

## Features

- Live Devanagari to Tirhuta Unicode transliteration
- Unicode compliant output
- Instant copy to clipboard
- Browser based interface
- Responsive design
- Culturally inspired visual design influenced by Madhubani Chitrakala
- Lightweight and fast
- Open source

---

## Technology

| Component | Technology |
| ---------- | ---------- |
| Front end | HTML, CSS, JavaScript |
| Transliteration Engine | Custom JavaScript |
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
│   ├── Images
│   └── Assets
│
├── firebase.json
├── README.md
└── LICENSE
```

---

## How It Works

The transliteration engine processes Unicode Devanagari input and maps supported characters and character sequences to their corresponding Tirhuta Unicode code points.

All processing takes place locally within the browser. No text is transmitted to a server, allowing the tool to remain lightweight, responsive, and privacy friendly.

The generated output can be copied directly into any Unicode compatible document, website, or application that supports Tirhuta fonts.

---

## Current Status

The project is actively under development.

Current work focuses on improving transliteration accuracy, refining orthographic rules, expanding conjunct support, and improving the overall user experience.

---

## Limitations

This tool performs Unicode transliteration based on implemented mapping rules.

Certain names, uncommon spellings, historical orthography, and context dependent forms may require manual review.

Additional linguistic rules and edge cases will continue to be incorporated in future releases.

---

## Roadmap

### v0.x

- Improve conjunct handling
- Improve orthographic accuracy
- Better support for names
- Additional transliteration rules
- Mobile experience improvements
- Documentation updates

### v1.0

- Stable transliteration engine
- Expanded linguistic support
- Browser extension
- Public API
- Dedicated Tirhuta keyboard
- JavaScript package
- Comprehensive documentation

---

## Contributing

Contributions, suggestions, bug reports, and discussions are welcome.

When reporting a transliteration issue, please include:

- Input text
- Expected output
- Actual output
- Additional linguistic context, if available

---

## Design Philosophy

The interface draws inspiration from traditional Mithila manuscripts and Madhubani art while maintaining a clean, modern, and accessible user experience.

The objective is to celebrate the cultural heritage of Mithila without compromising readability, usability, or performance.

---

## Credits

Designed & Developed by

**Shreya Suman**

© 2026 Shreya Suman

Research • Transliteration Engine • Front-end Development • UI/UX • Visual Design • Deployment
---

## License

Released under the **MIT License**.
