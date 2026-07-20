# Latrics Website 2.0

Welcome to the official repository for the **Latrics** website platform. This repository houses the front-end application representing Latrics' cutting-edge geospatial intelligence solutions, including DGCA-certified LiDAR drones like the LiCopter P720, the Terrain Desk platform, and comprehensive enterprise mapping services.

## 🚀 Tech Stack

This project is built using modern web development standards to ensure maximum performance, SEO optimization, and a highly interactive, premium user experience.

- **Framework:** [Next.js](https://nextjs.org/) (React Framework) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) for robust, type-safe code
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive, and highly customizable UI design
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid page transitions and micro-interactions
- **Icons:** Custom SVGs and Heroicons

## 📁 Repository Structure

The core application lives inside the `/frontend` directory:

```text
Latrics_website_2.0/
└── frontend/
    ├── public/             # Static assets (images, videos, etc.)
    ├── src/
    │   ├── app/            # Next.js App Router pages and layouts
    │   └── components/     # Reusable React components (UI elements, Layouts, Features)
    ├── package.json        # Project dependencies and scripts
    └── tailwind.config.ts  # Tailwind CSS configuration
```

## 🛠️ Setup & Installation

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd Latrics_website_2.0/frontend
   ```

2. **Install dependencies:**
   Navigate into the `frontend` folder and run:
   ```bash
   npm install
   ```
   *Note: If you use `yarn` or `pnpm`, run the respective install command.*

## 💻 Running the Development Server

Once dependencies are installed, you can start the local development server:

```bash
npm run dev
```

The application will launch on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to see the site in action. Any edits you make to the source files will automatically trigger a hot-reload in the browser.

## 🚢 Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will compile the Next.js application into the `.next` folder. To start the production server to preview the build locally, run:

```bash
npm run start
```

## 🎨 Design Philosophy
The Latrics website is designed with a premium, brutalist-inspired dark aesthetic. We emphasize stark contrasts, bold typography (Latrics Red `#da291c` alongside Deep Charcoal), and highly modular component architecture to allow the marketing team to scale pages rapidly.
