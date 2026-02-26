# TypeScript Notes API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)

> A Notes REST API built with Node.js, Express, and TypeScript — my first TypeScript learning project.

This project explores backend architecture, JWT authentication, middleware-based route protection, and user-specific data handling using file-based JSON storage (no database).

---

## Features

- User Registration & Login
- JWT Authentication
- Protected Routes via Middleware
- User-Specific Notes (users only see their own)
- Full CRUD — Create, Read, Update, Delete Notes
- Toggle Note Importance via path parameter (`PATCH /notes/:id/importance`)
- File-based JSON Storage (no database required)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Runtime | Node.js |
| Framework | Express |
| Language | TypeScript |
| Auth | JSON Web Token (JWT) |
| Storage | File System (JSON) |
| Frontend | React + TypeScript + Tailwind CSS |

---

## Project Structure

```
ToDo/
├── backend/
│   ├── entities/         # Type definitions & interfaces
│   ├── features/         # Business logic
│   ├── routes/           # API route handlers
│   ├── middleware/       # Auth & validation middleware
│   ├── shared/           # Shared utilities
│   └── data/             # JSON storage files
│
└── frontend/
    ├── components/       # React components
    ├── services/         # API service calls
    └── src/              # App entry point
```

---

## Authentication Flow

```
Register → Login → Receive JWT → Store in localStorage
       → Send token in Authorization header
       → Middleware verifies token
       → Access user-specific notes
```

---

## Screenshots

<div align="center">

| Login | Notes |
|-------|-------|
| <img src="screenshots/login.png" width="420"/> | <img src="screenshots/note.png" width="420"/> |

</div>

---

## Getting Started

**1. Clone the repo**

```bash
git clone https://github.com/NainaKothari-14/typescript-notes.git
cd ToDo
```

**2. Start the Backend**

```bash
cd backend
npm install
npm run dev
```

Runs on → `http://localhost:3001`

**3. Start the Frontend**

```bash
cd frontend
npm install
npm start
```

Runs on → `http://localhost:3000`

---

## What I Learned

- Setting up a TypeScript backend with Express
- Creating reusable file-based data helpers
- Implementing JWT authentication from scratch
- Protecting routes with custom middleware
- Handling user-specific data securely
- Connecting a React frontend with an authenticated backend
- Managing component state and side effects using `useState`, `useEffect`, and `useRef`

---

## Future Improvements

- [ ] Password hashing with bcrypt
- [ ] Refresh token implementation
- [ ] Better error handling middleware
- [ ] Migration to MongoDB or PostgreSQL
- [ ] Improved UI/UX

---

## Note

This is a learning project built while exploring TypeScript and backend development concepts for the first time.

---

## License

This project is licensed under the [MIT License](LICENSE).
