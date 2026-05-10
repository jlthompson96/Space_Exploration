
## 2024-05-10 - Code splitting lazy-loaded routes with Suspense
**Learning:** React Router routes without lazy loading cause the entire application to be loaded initially, creating a large bundle size and slower perceived load times. In an app where a user might only visit one tab/route at a time, splitting the components using `React.lazy()` dramatically decreases the initial JS bundle size.
**Action:** Always check if the main `Routes` block uses `React.lazy()` and `<Suspense>` for its component mapping, and implement code-splitting if not already done.
