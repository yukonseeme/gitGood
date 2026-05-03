# GitGood - Learn Git Interactively

GitGood is an interactive educational website designed to teach Git fundamentals through visual explanations and practical examples.

## What You'll Learn

- **What is Git?** - Understanding distributed version control systems
- **Why use Git?** - Benefits like safety, collaboration, history tracking, and experimentation
- **Key Concepts** - Repositories, commits, branches, staging area, and remotes
- **Practical Workflows** - Creating repositories, cloning, adding files, making commits, and managing the three zones (working directory, staging area, repository)

## Features

- Interactive visualizations of Git concepts
- Clear explanations with practical examples
- Command-line examples for common Git operations
- Responsive design for learning on any device

## Getting Started

This project is built with React, TypeScript, and Vite.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Learning Path

The website follows a structured learning path:
1. Introduction to Git and version control
2. Core benefits of using Git
3. Fundamental Git concepts and terminology
4. Hands-on guidance for basic Git workflows

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 for styling

---

*GitGood makes learning Git accessible and engaging through interactive visualizations and clear, practical explanations.*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
