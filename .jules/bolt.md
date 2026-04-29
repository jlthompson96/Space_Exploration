## 2024-08-09 - Code Splitting for React Routes with Vite
**Learning:** In Vite React applications, standard imports for route components bundle everything into a single massive chunk. This can drastically increase initial load time when routes contain heavy dependencies (like `react-player` or `he`).
**Action:** Use `React.lazy()` and `Suspense` for top-level route components to enable code splitting. This effectively splits out large dependencies into their own chunks that are only loaded when the user navigates to the respective route.
