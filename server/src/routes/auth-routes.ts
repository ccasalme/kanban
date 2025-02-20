import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Dummy user for now (Replace with DB user lookup later)
const dummyUser = {
    id: 1,
    username: "testuser",
    password: "$2b$10$Kq4w/uy6JhGO0JtUjlfPquQOdKfN7lYjLJ.qXkXHV9JHGFHIMWCB6" // bcrypt hash for "password123"
};

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Ensure username & password are provided
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Check if user exists (Replace with DB query later)
        if (username !== dummyUser.username) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, dummyUser.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: dummyUser.id, username: dummyUser.username },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return res.json({ token }); // ✅ Always return a response
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" }); // ✅ Handle unexpected errors
    }
});

export default router;
