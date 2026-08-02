# Project Rules

## 1. Project Overview

This project is a personal DevOps portfolio website hosted on GitHub Pages.

The project must remain:

- simple;
- lightweight;
- maintainable;
- fully static;
- free to host;
- free from unnecessary dependencies and overengineering.

## 2. Technology Stack

Use only:

- HTML5
- CSS3
- Vanilla JavaScript ES6+
- ES Modules
- JSON for static data
- Git
- GitHub
- GitHub Pages

Do not add frameworks, libraries, build tools, or package managers unless they are explicitly approved.

This includes:

- React
- Vue
- Angular
- jQuery
- Bootstrap
- Tailwind CSS
- npm dependencies

## 3. General Development Principles

Follow these principles:

- Keep solutions simple.
- Do not implement features that were not requested.
- Do not write code for hypothetical future requirements.
- Prefer native browser functionality.
- Avoid unnecessary abstractions.
- Avoid premature optimization.
- Do not refactor unrelated code.
- Make the smallest safe change required to complete the task.
- Preserve existing working functionality.
- Choose readability over cleverness.

## 4. Project Structure

```text
/
├── index.html
├── pages/
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
├── data/
└── PROJECT_RULES.md
```

New directories must only be added when they have a clear purpose.

## 5. HTML Rules

- Use semantic HTML5 elements.
- Maintain a logical heading hierarchy.
- Use descriptive link and button text.
- Add accessibility attributes only where necessary.
- All images must have appropriate alt attributes.
- Interactive elements must be keyboard accessible.
- Do not use inline CSS.
- Do not use inline JavaScript.
- Keep markup clean and readable.

## 6. CSS Rules

- Use a mobile-first approach.
- Use CSS custom properties for reusable values.
- Use Flexbox and CSS Grid where appropriate.
- Use clear and consistent class names.
- Avoid deeply nested selectors.
- Avoid unnecessary selector specificity.
- Do not use `!important` unless explicitly approved.
- Do not duplicate styles unnecessarily.
- Keep responsive rules close to the related component where practical.

Example:

```css
:root {
    --color-background: #ffffff;
    --color-text: #111111;
    --spacing-medium: 1rem;
}
```

## 7. JavaScript Rules

- Use modern JavaScript syntax.
- Use ES Modules.
- Use `const` by default.
- Use `let` only when reassignment is required.
- Do not use `var`.
- Avoid global variables.
- Keep each module focused on one responsibility.
- Use clear function and variable names.
- Keep functions small and focused.
- Handle possible errors explicitly.
- Do not add JavaScript when HTML or CSS can solve the task.
- Do not store secrets, tokens, or private credentials in frontend code.

## 8. Data Rules

Static content may be stored in JSON files inside the data directory.

Example:

```text
data/
├── projects.json
├── skills.json
└── certifications.json
```

JSON files must:

- contain valid JSON;
- use consistent property names;
- avoid duplicated data;
- contain only public information.

## 9. Naming Conventions

Use:

- kebab-case for files and directories;
- camelCase for JavaScript variables and functions;
- PascalCase only for constructor functions or classes;
- descriptive English names throughout the codebase.

Examples:

```js
project-card.css
mobile-menu.js
projects.json
const projectList = [];
function renderProjects() {}
```

Avoid abbreviations unless they are widely understood.

## 10. Responsive Design

The website must support:

- mobile;
- tablet;
- desktop.

Development must start from the mobile layout.

Do not create separate mobile and desktop pages.

Responsive behavior must be implemented with CSS media queries and minimal JavaScript.

## 11. Accessibility

Minimum requirements:

- keyboard-accessible navigation;
- visible focus states;
- sufficient color contrast;
- semantic landmarks;
- meaningful alternative text;
- properly associated form labels;
- reduced-motion support where animations are used.

## 12. Performance

- Optimize images before adding them.
- Prefer modern image formats when practical.
- Avoid unnecessary JavaScript.
- Avoid unnecessary network requests.
- Lazy-load non-critical images.
- Do not add large third-party scripts without approval.
- Keep the initial page load lightweight.

## 13. Git Workflow

### Branches

- `main` contains stable deployable code.
- New work must be performed in a dedicated branch.

Branch naming examples:

- `feature/mobile-navigation`
- `feature/projects-section`
- `fix/header-spacing`
- `refactor/project-rendering`

### Commits

Each commit must represent one logical change.

Commit message examples:

- `feat: add mobile navigation`
- `fix: correct project card spacing`
- `refactor: simplify menu toggle logic`
- `docs: update project rules`

Do not combine unrelated changes in one commit.

## 14. Task Execution Rules

For every development task:

1. Implement only the requested change.
2. Do not add extra features.
3. Do not modify unrelated files.
4. Do not refactor unrelated code.
5. Preserve existing behavior.
6. Report any discovered unrelated issue without fixing it.
7. Ask for approval before introducing a dependency.
8. Ask for approval before changing the project structure.
9. Keep the implementation as small as reasonably possible.
10. Follow this document as the source of truth.

## 15. Definition of Done

A task is complete when:

- the requested functionality works;
- existing functionality is not broken;
- the code follows project rules;
- the layout works on supported screen sizes;
- there are no obvious console errors;
- the implementation does not introduce unnecessary dependencies;
- only relevant files were changed.

## 16. Prohibited Changes Without Approval

Do not perform the following without explicit approval:

- add a framework;
- add npm or another package manager;
- add external libraries;
- add analytics;
- add tracking scripts;
- add a backend;
- add a database;
- change the hosting platform;
- restructure the entire project;
- redesign unrelated sections;
- refactor working code outside the task scope;
- add features that were not requested.

## 17. Current Portfolio Requirements

This is a personal DevOps engineer portfolio website.

- Hosting must remain free through GitHub Pages.
- The site must use HTML5, CSS3, and Vanilla JavaScript ES6+.
- The site must remain lightweight, fast, fully static, and easy to maintain.
- The design should be modern, minimal, and professional.
- Development must follow a mobile-first approach.
- Desktop navigation belongs at the top of the page.
- Mobile navigation uses a compact burger menu.
- The main sections are Home, About, Skills, Certifications, Projects, and Contact.
- The Projects section displays DevOps projects and links to their GitHub repositories.
- Do not add extra pages, sections, or features without an explicit request.

## 18. Priority Order

When rules conflict, use this priority:

1. Explicit task requirements
2. Existing approved design
3. This document
4. Existing project conventions
5. General best practices

The simplest valid solution should be preferred.
