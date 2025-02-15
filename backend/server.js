const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const jwtLib = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());

// Auth0 Config
const AUTH0_DOMAIN = "dev-h32e7d3l5lrftxe4.us.auth0.com";
const AUTH0_AUDIENCE = "https://dev-h32e7d3l5lrftxe4.us.auth0.com/api/v2/";
const JWT_SECRET = "your_jwt_secret"; // Replace with a secure value in production

// MongoDB Config
const MONGO_URI = "mongodb+srv://Giterdone:Ellehacks2025@aegis.6h05z.mongodb.net/?retryWrites=true&w=majority&appName=Aegis";
const client = new MongoClient(MONGO_URI);

const checkJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`, // Replace with your Auth0 domain
    }),
    audience: AUTH0_AUDIENCE, // Replace with your Auth0 audience
    issuer: `https://${AUTH0_DOMAIN}/`, // Replace with your Auth0 domain
    algorithms: ["RS256"],
});

app.use(cors({
    origin: "http://localhost:5173", // Replace with your React frontend URL
    methods: ["GET", "POST"],
    credentials: true
}));

// Connect to MongoDB
client.connect();
const db = client.db("HackWestern11");
const users = db.collection("user");
const admins = db.collection("admin");

// ** 1. Registration Endpoint **
app.post("/api/register", async (req, res) => {
    const { email, password, nickname } = req.body;

    if (!email || !password || !nickname) {
        return res.status(400).json({ error: "Email, password, and nickname are required" });
    }

    try {
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to MongoDB
        const newUser = {
            email,
            password: hashedPassword,
            nickname,
            createdAt: new Date(),
        };

        await users.insertOne(newUser);

        res.status(201).json({ message: "User registered successfully", user: { email, nickname } });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});

// ** 2. Login Endpoint for Users **
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await users.findOne({ email });

        console.log("User fetched from DB:", user);

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Password comparison result:", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwtLib.sign(
            {
                userId: user._id,
                email: user.email,
                nickname: user.nickname,
            },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Failed to log in" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

