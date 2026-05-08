
## 2024-05-24 - Node.js scripts fail due to ES Modules
**Learning:** The project's `package.json` specifies `"type": "module"`, so custom Node.js scripts using CommonJS `require` will fail.
**Action:** Use ES module syntax or alternatives like `sed` and git tools to edit files instead.
