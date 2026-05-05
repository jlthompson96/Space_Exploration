## 2024-05-05 - Top-Level Route Code Splitting
**Learning:** By default, all components are bundled into a single large main JavaScript file by Vite, increasing initial load time.
**Action:** Always use `React.lazy()` and `Suspense` for top-level React Router components to enable code splitting. This will reduce initial bundle sizes significantly, loading chunks only when the user navigates to the respective route.
