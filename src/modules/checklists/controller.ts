import { Router } from "express";
import {
  handleCreateChecklist,
  handleDeleteChecklist,
  handleGetChecklistById,
  handleGetChecklistList,
  handleUpdateChecklist,
} from "./service";

const checklistsRouter = Router();

// Create checklist
checklistsRouter.post("/", handleCreateChecklist);

// Get list of checklists
checklistsRouter.get("/", handleGetChecklistList);

// Get checklist by id
checklistsRouter.get("/:id", handleGetChecklistById);

// Update checklist by id
checklistsRouter.patch("/:id", handleUpdateChecklist);

// Delete checklist by id
checklistsRouter.delete("/:id", handleDeleteChecklist);

export default checklistsRouter;
