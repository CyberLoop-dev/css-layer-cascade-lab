<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0f766e&height=170&section=header&text=css%20layer%20cascade%20lab&fontSize=36&fontColor=ffffff&animation=twinkling" alt="Animated wave header"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=css%20layer%20cascade%20lab%20%7C%20inspect%2C%20understand%2C%20improve" alt="Animated title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/css-layer-cascade-lab?style=for-the-badge" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/css-layer-cascade-lab?style=for-the-badge" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/css-layer-cascade-lab?style=for-the-badge" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/css-layer-cascade-lab?style=for-the-badge" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" alt="css-layer-cascade-lab project mark" width="520"/></p>

## 🧭 Overview

`css-layer-cascade-lab` makes CSS cascade layers visible. It applies the same selector in three named layers, lets you reorder their precedence, and displays the browser-computed result so you can see that layer order is resolved before selector specificity across layers.

## ✨ Features

- 🎚️ Switch between several layer-precedence orders
- 🧪 Keep selectors equally specific to isolate layer ordering
- 🔍 Read computed background, text color, and border values
- 🧠 See the active `@layer` order declaration
- 🔒 Runs locally with no external requests or dependencies

## 🧪 Demo

Start the local server and open `http://127.0.0.1:4173`. Use **Change layer order** and compare the preview and computed-style panel. No hosted demo is published.

## 🚀 Quick Start

```bash
npm start
```
Open `http://127.0.0.1:4173` in a modern browser. Node.js 18 or newer is required; there are no npm dependencies.

## 🧰 Tech Stack

- **Stack:** Node.js built-in HTTP server, HTML, CSS Cascade Layers, and browser JavaScript
- **Approach:** small, local-first tooling with clear output

## 🗂️ Folder Structure

```text
css-layer-cascade-lab/
├── assets/mark.svg
├── public/index.html
├── public/styles.css
├── public/app.js
├── server.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🛣️ Roadmap

- Add a specificity comparison inside a single layer
- Export the current layer-order declaration as CSS

## 🤝 Contributing

Issues and focused pull requests are welcome. Explain the use case, keep changes small, and add tests for behavior changes. Run the project using the Quick Start instructions before submitting.

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0f172a&height=120&section=footer&animation=twinkling" alt="Animated wave footer"/></p>
