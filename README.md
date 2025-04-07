# 🧠 Krazy Kanban Board

## 📚 Description

The **Krazy Kanban Board** is a full-stack web application with secure JWT-based authentication, allowing teams to log in and manage work tasks using kanban-style ticket lanes. The backend is powered by Express and PostgreSQL, while the frontend is built with Vite + React and protected via token-based access. This app meets all bootcamp acceptance criteria and includes seeded test data for quick login access.

---

## ✨ Features

- ✔️ **Secure Authentication:** Login system with JWT issued and stored in localStorage.
- ✔️ **Session Persistence:** JWT kept in browser for active sessions.
- ✔️ **Token Expiration:** Automatically logs out expired sessions.
- ✔️ **CRUD Support:** Create, update, and delete task tickets.
- ✔️ **Protected Routes:** Routes are only accessible by logged-in users.
- ✔️ **Seeded Demo Users:** Check the `server/seeds` folder for sample user credentials.
- ✔️ **Seeded Demo Users:** Example credential (username: spideynohome || password: password



https://github.com/user-attachments/assets/bc2e6fe3-3561-4bba-b115-07264d3fe052



---

## 📌 Purpose

This Kanban application was built to fulfill bootcamp project requirements and demonstrate a full authentication flow. It allows users to securely log in, access their workspace, and perform basic task management through tickets.

---

## ⚙️ Installation

### 📋 Prerequisites

- Node.js and npm installed
- PostgreSQL database set up
- `.env` file configured in the `server/` directory

### 🛠️ Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your_repo_link_here>
   ```

2. **Install dependencies**
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. **Set environment variables**
   Create `.env` in `/server` with:
   ```env
   DB_URL=your_postgres_connection_string
   JWT_SECRET_KEY=your_secret_key
   ```

4. **Seed the database** (optional, recommended)
   ```bash
   npm run seed
   ```

5. **Start the application**
   ```bash
   npm run start:dev
   ```

---

## 🚀 Usage

- Open `http://localhost:3000`
- Use a seeded account to log in
- View, add, and delete tickets
- Logout to end your session

> 💡 For login credentials, see `server/seeds/index.ts`

---

## 🧪 Testing

Manual testing can be performed:

- ✅ Log in with valid credentials
- ❌ Attempt invalid logins and observe error
- 🔐 Access `/api/tickets` when logged in vs. logged out
- ⏰ Leave session idle and verify logout after expiration

---

## 🌐 Deployment

Deployed with Render:

- 🌍 **Live App:** [[Kanban App](https://kanban-c58x.onrender.com/)](https://kanban-c58x.onrender.com/

---

## 🙌 Notes:

- Styled minimally for function-first submission

---

## 📜 License

MIT License. See [LICENSE](./LICENSE) for details.

