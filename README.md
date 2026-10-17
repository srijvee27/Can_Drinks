# AURA — Sparkling Water (Can Drinks)

> **Brightness, with a pulse.**  
> An interactive 3D WebGL showcase and digital brand experience for AURA sparkling water cans and natural fruit extracts.

---

## Overview

**AURA — Can Drinks** is an interactive web experience featuring real-time 3D rendering of beverage cans and orbiting fruit components. Users can rotate the can in 3D, inspect ingredients across multiple chapters, pull the can tab, examine macro condensation textures, switch between four signature flavours, and manage an interactive bag/cart saved locally in the browser.

The project is built as a lightweight client-side application served by a zero-dependency Node.js HTTP static server.

---

## Key Features

- **Interactive 3D Can Experience**: Real-time 3D canvas powered by WebGL/Three.js with horizontal drag rotation, keyboard navigation (left/right arrows, Home key to reset), and fallback handling for non-WebGL devices.
- **Narrative Chapter Scrolling**: 10 interactive story chapters (`#chapter-0` through `#chapter-9`) exploring ingredients, nutritional labels, can opening animations, macro condensation surface studies, kinetic typography, and flavour collections.
- **Can Tab Opening Interaction**: Interactive pull-tab simulation with tactile visual state toggle.
- **Flavour Customizer & Collection**: Switch between 4 distinct flavours (including Citrus Pulse) with dynamic atmospheric color shifting, fruit 3D model orbits (`.glb` models for blackberry, lime, mango, orange, passionfruit, pineapple, raspberry), and flavor profiles.
- **Interactive Bag (Cart)**: Add flavour cans to an interactive dialog bag drawer (`#bag-dialog`) persisted in browser client storage.
- **Accessible & Responsive Design**: Includes semantic skip links, keyboard controls, ARIA states, polite screen-reader announcements, and pause-motion toggles.
- **Zero-Dependency Local Server**: Built-in Node.js HTTP server with MIME type resolution, clean error handling, CORS headers, and configurable port support.

---

## Technology Stack

- **Frontend Core**: HTML5 semantic markup, CSS3 animations and layout, JavaScript (ES modules).
- **3D Graphics & Assets**: WebGL / Three.js bundle with GLTF/GLB 3D models (`f-blackberry.glb`, `f-lime-half.glb`, `f-mango-whole.glb`, etc.).
- **Typography & Icons**: Google Sans Flex, inline and standalone SVG assets (`vulk-mark-DTfpp7YT.svg`).
- **Server Runtime**: Node.js (CommonJS, native `http`, `fs`, `path` modules).
- **Package Manager**: npm.

---

## Project Structure

```text
Can Drinks/
├── assets/                          # Static assets and 3D models
│   ├── f-blackberry.glb             # 3D fruit model: Blackberry
│   ├── f-lime-half.glb              # 3D fruit model: Lime half
│   ├── f-lime-whole.glb             # 3D fruit model: Lime whole
│   ├── f-mango-half.glb             # 3D fruit model: Mango half
│   ├── f-mango-whole.glb            # 3D fruit model: Mango whole
│   ├── f-orange-half.glb            # 3D fruit model: Orange half
│   ├── f-passion-half.glb           # 3D fruit model: Passion fruit half
│   ├── f-pineapple-wedge.glb        # 3D fruit model: Pineapple wedge
│   ├── f-raspberry.glb              # 3D fruit model: Raspberry
│   ├── index-DAoRYXQR.js            # Main bundled client application logic
│   ├── index-ebbjYBrm.css           # Application stylesheet & layout rules
│   └── vulk-mark-DTfpp7YT.svg       # Brand icon asset
├── .gitignore                       # Git ignore definitions
├── index.html                       # Application HTML entry point
├── package.json                     # Project manifest and scripts
├── README.md                        # Documentation
└── server.js                        # Lightweight Node.js static file server
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or later recommended)
- Modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/srijvee27/Can_Drinks.git
   cd Can_Drinks
   ```

2. **Install dependencies**:
   This project uses native Node.js modules and does not require third-party npm packages to run. Running `npm install` is optional.

---

## Running the Application

### Option 1: Start with npm scripts
Start the local server using npm:
```bash
npm start
```
or
```bash
npm run dev
```

### Option 2: Run directly with Node.js
```bash
node server.js
```

By default, the server will start at:
```text
http://localhost:4000/
```

### Custom Port Configuration
The server accepts an optional `PORT` environment variable:
- **macOS / Linux**:
  ```bash
  PORT=5000 npm start
  ```
- **Windows (PowerShell)**:
  ```powershell
  $env:PORT="5000"; npm start
  ```
- **Windows (CMD)**:
  ```cmd
  set PORT=5000 && npm start
  ```

---

## Controls & Navigation

| Action | Control |
|---|---|
| Rotate Can | Click/touch and drag horizontally |
| Turn Left / Right | `Left Arrow` / `Right Arrow` keys |
| Reset Rotation | `Home` key |
| Skip to Canvas | Click "Skip to interactive can" link |
| Pause / Resume Motion | "Pause motion" toggle button in header |
| Audio Toggle | Sound button in footer |
| Inspect Ingredients & Can | Scroll or use the chapter navigation dots on the side rail |

---

## Testing & Verification

- **Script verification**: Validated with `node --check server.js`.
- **Build / Test scripts**: Note that this repository contains pre-bundled distribution assets (`assets/index-*.js`, `assets/index-*.css`) with a standalone static server. There are currently no automated unit test suites (`npm test`) or build steps (`npm run build`) defined in `package.json`.

---

## License

This project is licensed under the [MIT License](package.json).
