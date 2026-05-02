
## 2026-05-02 - Code Splitting Routes using React.lazy
**Learning:** Top-level route components (`APOD`, `MarsPhotos`, `NASANews`) were being eagerly imported in `src/components/Header.tsx`, causing all routes to be bundled into the main index chunk. This slowed down the initial Time to Interactive (TTI) for the application.
**Action:** Always implement code splitting via `React.lazy` and `Suspense` for top-level routes in React Router applications to ensure users only download the code for the route they're currently visiting. The main chunk was reduced significantly.
