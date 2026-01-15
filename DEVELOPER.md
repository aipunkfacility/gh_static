# Green Hill Tours - Developer Documentation

This project is a modern, high-performance static website built with Vanilla JavaScript and the **Vite** build tool.

## 🏗 Architecture Overview

The site follows a "Single Page" dynamic rendering approach:

- **`index.html`**: The main entry point. Minimal HTML, serves as a shell.
- **`src/js/main.js`**: Orchestrates data loading and section rendering.
- **`src/js/services/`**: Contains core services like `dataService.js` (fetching & caching).
- **`src/js/sections/`**: Modular section builders (Hero, Excursions, etc.).
- **`src/js/components/`**: Reusable UI units like cards.
- **`public/data/`**: JSON files containing all site content.
- **`public/images/`**: Optimized assets.

## 🚀 Development

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Setup

1. Clone the repository.
2. Run `npm install` to install dependencies (Vite).

### Commands

- `npm run dev`: Start local development server at `http://localhost:3000`.
- `npm run build`: Generate optimized production build in `dist/`.
- `npm run preview`: Preview the production build locally.

## 🛠 Tech Stack Details

- **Build Tool**: Vite 7+
- **Styling**: Utility-first CSS (Vanilla) with CSS Variables.
- **Icons**: Remix Icon (CDN).
- **Security**: XSS protection via `escapeHTML`.
- **Performance**:
  - `sessionStorage` caching for data.
  - Image lazy loading.
  - Minimal JS payload.

## 📁 Data Management

To update content, edit the JSON files in `public/data/`. The site will automatically reflect changes on reload (or HMR during dev).

## 🚀 Deployment (GitHub Pages)

This project is configured for **automated deployment** via GitHub Actions.

### Setup Instructions

1. **Push your changes**: Commit and push all files (including the new `.github` folder) to your `main` branch.
2. **GitHub Settings**:
    - Go to your repository on GitHub.
    - Navigate to **Settings** > **Pages**.
    - Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown.
3. **Automatic Build**: GitHub will now automatically build and deploy your site every time you push to `main`. You can monitor progress in the **Actions** tab.

Your site will be live at: `https://<your-username>.github.io/gh_static/`

### Manual Build

If you ever need to build the site locally without GitHub Actions:

1. Run `npm run build`.
2. The ready-to-use files will be in the `dist/` directory.

---
*Created by Antigravity AI.*
