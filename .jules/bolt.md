## 2024-05-14 - React Lazy Loading Code Splitting
**Learning:** Found that all route components (`APOD`, `MarsPhotos`, `NASANews`) were being eagerly imported in `Header.tsx`, causing all their code and dependencies (e.g., `react-player` and `he`) to be bundled into the initial payload, slowing down the initial load time.
**Action:** Used `React.lazy()` and `<Suspense>` to code-split the route components. This defers loading them until they are actually rendered, reducing the initial bundle size and improving the frontend performance significantly.
