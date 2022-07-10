require("dotenv").config();
const { ENVIROMENT } = process.env;
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const PORT = 8080;
const cors = require("cors");

// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const projectsRoutes = require("./routes/projectsRoutes");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// middleware setup
app.use(morgan(ENVIROMENT));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));

// routes
app.use("/users", usersRoutes(db));
app.use("/api/tasks", tasksRoutes(db));
app.use("/api/projects", projectsRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
