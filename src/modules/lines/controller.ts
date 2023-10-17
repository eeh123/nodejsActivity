import { Router } from "express";
import {
  handleCreateLine,
  handleDeleteLine,
  handleGetLineById,
  handleGetLineList,
  handleUpdateLine,
} from "./service";

const linesRouter = Router();

// Create line
linesRouter.post("/", handleCreateLine);

// Get list of lines
linesRouter.get("/", handleGetLineList);

// Get line by id
linesRouter.get("/:id", handleGetLineById);

// Update line by id
linesRouter.patch("/:id", handleUpdateLine);

// Delete line by id
linesRouter.delete("/:id", handleDeleteLine);

export default linesRouter;
