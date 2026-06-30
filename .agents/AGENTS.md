# Port Configuration Rule
Always assign a unique, permanent local host port for every project in its development configuration (e.g. `vite.config.js`). 
Do not rely on the default port or auto-incrementing. 
Always use `strictPort: true` to prevent the development server from silently starting on a different port and causing overlap or confusion.
