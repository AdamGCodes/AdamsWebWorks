# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

/*
README NOTES
------------

🔹 **Expandable Card Chosen for Passion Section**
The expandable card pattern was selected due to its high accessibility. It allows for clear keyboard navigation, semantic HTML, and screen-reader compatibility, all while providing a clean and flexible layout for presenting the user's core values. It also supports progressive enhancement via animation if desired, without relying on motion to convey meaning.

🔹 **Cog Background Improvements**
A major visual and structural improvement in this portfolio is the dynamically generated cog background used in the hero section. The previous implementation relied on numerous hard-coded image elements. This new approach uses JavaScript to programmatically render the cog layout, making it:
- More responsive to screen size
- Easier to customise (e.g. number, spacing, layering)
- Less repetitive and more maintainable

This update improves performance and design consistency while showcasing a more scalable coding approach.
*/


### 🎨 Styling Approach

This project uses SCSS partials for each component, compiled through a central `main.scss` file. This approach keeps styles modular and maintainable while benefiting from global consistency and fast theming.

#### ✅ Why this works for this project:
- Clean separation of concerns without cluttering JSX
- Easy to scale and update shared styles
- Fast to prototype and refactor across components

While fully modular systems like CSS Modules or CSS-in-JS were considered, the current setup offers a simpler, more efficient workflow for a personal portfolio. More scoped styling may be introduced in future if project complexity grows.

