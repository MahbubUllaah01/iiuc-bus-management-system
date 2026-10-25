import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT) || 3000;
const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
const projectRoot = path.resolve(currentDir, "..");

app.use(express.json());
app.use(express.static(path.join(projectRoot, "public")));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    project: "IIUC Bus Management System",
    note: "Independent development prototype; database and business APIs are not implemented yet."
  });
});

app.listen(port, () => {
  console.log(`Development server running at http://localhost:${port}`);
});
