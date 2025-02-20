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
    const { username, password } = req.body;

    // Check username (Replace with DB query later)
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

    res.json({ token });
});

export default router;
