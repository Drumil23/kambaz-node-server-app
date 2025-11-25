import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import session from "express-session"; 
import "dotenv/config"; 
const app = express()

// CORS must be first - before any routes or other middleware
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
}));

// Body parsing middleware
app.use(express.json());

// Session configuration (single definition)
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};

// If not in development, adjust cookie settings for cross-site cookies
if (process.env.SERVER_ENV !== "development") {
  sessionOptions.proxy = true;
  // Derive a domain without protocol or trailing slash if SERVER_URL provided
  let cookieDomain;
  if (process.env.SERVER_URL) {
    cookieDomain = process.env.SERVER_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: cookieDomain,
  };
}

// Session middleware after CORS
app.use(session(sessionOptions));

UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
// Root route: helpful message for browser requests to '/'
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Kambaz Node Server is running. Use /api endpoints.' });
});
ModuleRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

