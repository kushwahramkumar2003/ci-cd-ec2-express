import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript + CORS!" });
});

app.post("/data", (req: Request, res: Response) => {
  res.json({ received: req.body });
});

// Export app for testing
export default app;

// Only start server if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
