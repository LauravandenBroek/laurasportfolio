# Laura's Portfolio - AI Coding Agent Instructions

This document provides instructions for AI coding agents to effectively contribute to Laura's portfolio website.

## Project Overview

This is a portfolio website built with React and Vite. The main goal is to showcase Laura's skills, projects, and education.

### Key Files

- `index.html`: The main entry point of the application.
- `src/main.jsx`: Renders the main React application.
- `src/App.jsx`: The root component of the application, which orchestrates the different sections of the portfolio.
- `src/components/`: This directory contains all the React components used in the portfolio.

## Architecture

The application is structured as a single-page application (SPA) with a main `App.jsx` component that renders different sections. Each section is a separate component.

### Component Structure

- `App.jsx`: The main component that assembles the portfolio sections.
- `Navigation.jsx`: The navigation bar.
- `Hero.jsx`: The hero section, likely containing a headline and a call to action.
- `AboutMe.jsx`: A section with information about Laura.
- `Skills.jsx`: A section to showcase Laura's skills. It uses the `SkillCard.jsx` component to display individual skills.
- `Projects.jsx`: A section to display Laura's projects. It uses the `ProjectCard.jsx` component for each project.
- `Education.jsx`: A section for Laura's education. It uses the `EducationCard.jsx` component.
- `Footer.jsx`: The footer of the page.

## Developer Workflow

### Running the application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start a local development server.

### Building for production

To build the application for production, use the following command:

```bash
npm run build
```

This will create a `dist` folder with the optimized production build.

## Conventions

- **Component Naming**: Components are named in PascalCase (e.g., `ProjectCard`).
- **File Structure**: Each component has its own file.
- **Styling**: Global styles are in `src/index.css` and `src/App.css`. Component-specific styles can be added if needed.
- **Data**: Currently, the data for projects, skills, and education is hardcoded in their respective components.

## How to contribute

When adding a new section to the portfolio:

1.  Create a new component in the `src/components` directory.
2.  If the section displays a list of items (like projects or skills), create a separate card component for each item.
3.  Import the new section component into `src/App.jsx` and add it to the component tree.
4.  Add any necessary styling to the global CSS files or create a new CSS file for the component.
