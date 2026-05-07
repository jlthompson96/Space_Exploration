## 2024-05-08 - Lazy Loading Chunk Optimization
**Learning:** By utilizing React.lazy() and Suspense for components under react-router Routes, Vite naturally splits these components into separate chunks during build time. This significantly reduces the initial main index.js bundle size.
**Action:** Always implement code splitting via lazy loading for distinct high-level views or routes in React applications, unless immediate rendering of all content is absolutely essential.
