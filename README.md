 🚀 User Management Dashboard (React + Vite)
A **beginner-friendly User Management Dashboard** built with **React (JSX)** and **Vite**, showcasing CRUD operations, API integration, search/filter/sort, and basic pagination.  
It connects to the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to simulate a backend.

 ✨ Features
- 📋 **List Users** — ID, First/Last Name, Email, Department  
- ➕ **Add User** — client-side validation + optimistic update  
- ✏️ **Edit User** — pre-filled form + validation  
- ❌ **Delete User** — confirmation + optimistic update  
- 🔎 **Search & Filter** — by name/email/department  
- ↕️ **Sorting** — sort by columns  
- 📑 **Pagination** — simple UI (client-side)  
- 🎨 **Styling** — clean responsive CSS (`src/styles/main.css`)  

 🛠️ Tech Stack
- [React 18](https://reactjs.org/) (JSX, functional components, hooks)  
- [Vite](https://vitejs.dev/) (fast bundler & dev server)  
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (API requests)  
- Plain CSS (no framework, beginner-friendly)

 📂 Project Structure
 src/
index.jsx # React entry
App.jsx # Root component
styles/main.css # Global styles
components/ # UI components
UserTable.jsx
UserForm.jsx
Pagination.jsx
SearchFilter.jsx
services/ # API layer
userService.js
hooks/ # Custom React hooks
useUsers.js
utils/ # Helpers
validation.js
sort.js
