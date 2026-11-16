# Ceylon Event Planners — Interactive Event Planning Web Portfolio

A responsive, multi-page Sri Lankan event planning portfolio website created for the **Interactive Web Portfolio Project** group assignment using semantic **HTML5**, modern **CSS3**, and vanilla **JavaScript**.

---

## 1. Project Structure

```text
ceylon_event_planners_portfolio/
├── index.html            # Home page (Hero, Services overview, Signature Moments Slider, CTA)
├── portfolio.html        # Portfolio page (Dynamic JSON event gallery, Category filters, Modal popup)
├── contact.html          # Contact page (Event consultation booking form with JS validation)
├── css/
│   └── style.css         # Responsive layout (Flexbox & Grid), custom variables, dark mode, animations
├── js/
│   └── script.js         # Hamburger menu, theme toggle, image slider, dynamic JSON loader, modal, form validation
├── data/
│   └── events.json       # Structured JSON dataset for portfolio event items
├── images/               # Sri Lankan event showcase graphics & banners
│   ├── hero-banner.jpg
│   ├── wedding-gala.jpg
│   ├── year-end-party.jpg
│   ├── musical-show.jpg
│   └── award-ceremony.jpg
└── README.md             # Project documentation
```

---

## 2. Group Roles & Contributions

| Role | Responsibilities & Contributions |
| :--- | :--- |
| **1. Project Manager** | Coordinated team milestones, task allocation, and final submission review. |
| **2. HTML Lead** | Built semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) across `index.html`, `portfolio.html`, and `contact.html`. |
| **3. CSS Layout Designer** | Implemented responsive layouts using CSS Grid, Flexbox, and media queries for mobile, tablet, and desktop screens. |
| **4. CSS Styling Designer** | Designed the custom color palette, typography hierarchy, light/dark mode variables, hover transitions, and keyframe animations. |
| **5. JavaScript Functionality Developer** | Developed the mobile hamburger navigation, interactive home page slider, dynamic JSON portfolio rendering, category filtering, and event details modal. |
| **6. JavaScript Validation Developer** | Implemented real-time client-side form validation (required fields, email format regex, character limits, and error/success feedback) on `contact.html`. |
| **7. Content Manager** | Curated Sri Lankan event descriptions, service highlights, imagery, and structured `data/events.json`. |
| **8. Testing & Documentation Lead** | Tested cross-browser/device responsiveness and authored `README.md`. |

---

## 3. Features Implemented

- **Semantic Multi-Page Architecture:** Three complete pages (`Home`, `Portfolio`, `Contact`) with accessible navigation.
- **Responsive Design:** Adapts cleanly across desktop, tablet (`<= 992px`), and mobile (`<= 768px`) viewports using CSS Grid and Flexbox.
- **Interactive Navigation & Theme Toggle:** Mobile hamburger menu toggle and persistent Light/Dark mode switch (`localStorage`).
- **Signature Moments Slider (Home Page):** Interactive showcase featuring **Wedding**, **Year-End Party**, and **Musical Show** highlights.
- **Dynamic Content & Filtering (Portfolio Page):** Loads Sri Lankan event case studies from `data/events.json` (with built-in local fallback), supports category filtering (`All`, `Wedding`, `Year-End Party`, `Musical Show`, `Award Ceremony`), and opens a detailed modal popup per event.
- **Form Validation:** Validates Full Name, Email format, Event Type, Date, and Message length before displaying confirmation feedback.

---

## 4. Instructions to Run the Project

1. **Option A — Direct Browser Open:** Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).
2. **Option B — Local Development Server (Recommended for `fetch()` JSON loading):**
   - Open the folder in **VS Code** and click **Go Live** (using the *Live Server* extension), or run:
     ```bash
     python -m http.server 8000
     ```
   - Visit `http://localhost:8000` in your browser.
