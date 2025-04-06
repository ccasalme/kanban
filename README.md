# 🧠 Krazy Kanban Board

## 📚 Description

The **Krazy Kanban Board** is a full-stack web application that integrates secure user authentication via JSON Web Tokens (JWT). It enables agile teams to manage work tasks on a drag-and-drop Kanban board interface. With JWT authentication, users can securely log in, maintain sessions, and manage tickets across multiple swimlanes.

---

## ✨ Features

- ✔️ **Secure Login:** Authenticate users with JWT.
- ✔️ **JWT Storage:** Tokens stored in `localStorage` for session persistence.
- ✔️ **Login Validation:** Error feedback for invalid credentials.
- ✔️ **Protected Routes:** Redirects unauthenticated users to the login page.
- ✔️ **Session Timeout:** Automatically logs users out after inactivity.
- ✔️ **CRUD Operations:** Create, update, and edit Kanban tickets.
- ✔️ **Responsive UI:** Fully mobile-responsive with elegant gradient styling.

---

## 💡 User Story

> AS A member of an agile team  
> I WANT a Kanban board with a secure login page  
> SO THAT I can securely access and manage my work tasks  

---

## ✅ Acceptance Criteria

- [x] **Login Page with Form Inputs**
- [x] **Valid login stores JWT and redirects to board**
- [x] **Invalid login shows error message**
- [x] **JWT stored securely in `localStorage`**
- [x] **Logout clears JWT and redirects to login**
- [x] **Unauthenticated access redirects to login**
- [x] **Inactivity expires token and redirects**

---

## ⚙️ Installation

### Prerequisites
- Node.js and npm
- PostgreSQL
- Render account for deployment

### Steps
1. **Clone the repo:**
   ```bash
   git clone <your_repo_link_here>
   ```
2. **Install dependencies:**
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. **Environment Setup:**  
   Create a `.env` file in the `server` directory with:
   ```env
   DB_USER=your_db_user
   DB_PASSWORD=your_password
   JWT_SECRET_KEY=your_secret_key
   ```
4. **Start the app locally:**
   ```bash
   npm run dev  # From root or set up concurrently
   ```

---

## 🚀 Usage

- Navigate to `http://localhost:3000`
- Enter valid login credentials
- View the Kanban board
- Create or edit tickets
- Logout to clear your session

---

## 🧪 Testing

Manual testing can be performed using:
- Login with correct/incorrect credentials
- Inspect `localStorage` for JWT
- Attempt accessing `/` without login
- Wait for token expiration and confirm redirection

---

## 🌐 Deployment

Deployed on [Render](https://render.com):
- 🌍 **Live App:** [https://your-kanban.render.com](https://your-kanban.render.com)
- 💻 **GitHub Repo:** [https://github.com/your-user/kanban-auth](https://github.com/your-user/kanban-auth)

---

## 📝 README Requirements
- [x] Unique repository name
- [x] Clean file structure and naming
- [x] Descriptive commit messages
- [x] Clear explanation of purpose and features
- [x] Screenshot of deployed app (optional but recommended)
- [x] Deployment link included

---

## 🙌 Acknowledgements
- Starter code provided by the bootcamp curriculum
- Styled with love and gradients 💜
- Built with React, Node.js, PostgreSQL, Express, and JWT

---

## 📜 License

MIT License. See [LICENSE](./LICENSE) for details.

---

Happy shipping and agile sprinting! 🧩🚀

