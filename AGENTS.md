# Agentic Development Guidelines

Welcome, AI Agent. This repository contains the source code for the PT MITRAJAYA BAHARI (MJB) logistics company website. Please read and follow these guidelines when contributing to or modifying this project.

## 1. Project Overview
- **Name:** MJB Logistics Website
- **Description:** A static, multi-lingual web application showcasing logistics, depot, and customs solutions.
- **Location:** `c:\Users\User\Desktop\code\243llaGithubPages`

## 2. Tech Stack
- **Structure:** Vanilla HTML5 (`index.html`)
- **Styling:** Vanilla CSS (`styles.css`) combined with Tailwind CSS (via CDN).
- **Interactivity:** Vanilla JavaScript (`app.js`, `language.js`).
- **Icons:** Google Material Symbols.

## 3. Codebase Structure
- `/index.html`: The main and only HTML entry point.
- `/styles.css`: Custom CSS containing core design tokens, theme variables (`theme-surface`, `theme-text`), and overrides.
- `/app.js`: Main JavaScript file handling UI interactions (theme toggling, mobile menu, modals, etc.).
- `/language.js`: Translation logic and dictionary for English, Chinese, and Indonesian.
- `/src/img/`: Contains all visual assets and logos.

## 4. Coding Standards & Agent Rules

### Architecture & Frameworks
- **No Build Tools:** The project currently uses no bundlers (like Webpack or Vite) and no frameworks (like React or Vue). Do **not** introduce them unless explicitly requested by the user.
- **Tailwind via CDN:** Continue using Tailwind classes. Avoid adding new large CSS libraries.

### Styling
- **Theming:** The site uses custom CSS variables for light/dark modes (e.g., `.light-mode`, `.dark-mode`).
- When styling new components, prefer Tailwind utility classes. For structural theming, use the existing custom classes defined in `styles.css` (e.g., `theme-card`, `theme-muted`, `theme-primary-btn`).

### Multi-language Support (i18n)
- The site supports multi-lingual content via `language.js`.
- If you add new text to `index.html`, you **must** assign it a `data-i18n="key.name"` attribute.
- Then, update the `translations` object inside `language.js` to include the new text for all supported languages (`en`, `zh`, `id`).

### Best Practices
- **Clean Code:** Write clear, concise Vanilla JS.
- **Responsive Design:** Ensure all new UI additions look good on mobile, tablet, and desktop (use Tailwind's `md:`, `lg:` prefixes).
- **Aesthetics:** Adhere to the existing premium design aesthetic (rounded corners, subtle transitions, glassmorphism if applicable, clean typography).

## 5. Typical Tasks You May Be Asked To Perform
- Adding new service sections or client logos.
- Updating translations in `language.js`.
- Fixing responsive layout issues.
- Modifying light/dark mode colors in `styles.css`.

Before making large changes, review `index.html` and `styles.css` to ensure you are aligning with the established patterns.
