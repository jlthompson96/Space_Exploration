## 2024-04-27 - Routing code splitting
**Learning:** Eagerly loading component routes in the main application router (`src/components/Header.tsx`) causes all page components (`APOD`, `MarsPhotos`, `NASANews`) to be compiled into a single massive index JS bundle (~449.24 kB).
**Action:** Always use `React.lazy()` and `<Suspense>` to lazy load distinct page components in React Router, separating them into individual chunks that are loaded on demand and keeping the main application bundle smaller and faster to parse.
