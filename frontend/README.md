# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Project Objective: 
- Recipe Management API allows users to manage recipes, including creating, reading, updating, and deleting recipe entries. 

Features:
- CRUD operations (Create, Read, Update, Delete) for recipes, each of which can have an associated list of allergens.

Key Points:
- Connects to MongoDB using connectDB() from db.mjs.
- Uses middleware to parse JSON and handle CORS.
- Mounts the routes defined in recipeRoute.mjs under the /recipe path.
- Error handling middleware to catch and respond to errors.
