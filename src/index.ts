import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable CORS for all origins (*)
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express with CORS!" });
});

// Example POST route
app.post("/data", (req, res) => {
  res.json({ received: req.body });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
