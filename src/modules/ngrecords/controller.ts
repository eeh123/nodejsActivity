import { Router } from "express";
import {
  handleCreateNgrecord,
  handleDeleteNgrecord,
  handleGetNgrecordById,
  handleGetNgrecordList,
  handleUpdateNgrecord,
  handleSoftDeleteNgrecord,
} from "./service";

const ngrecordsRouter = Router();

// Create ngrecord
ngrecordsRouter.post("/", handleCreateNgrecord);

// Get list of ngrecords
ngrecordsRouter.get("/", handleGetNgrecordList);

// Get ngrecord by id
ngrecordsRouter.get("/:id", handleGetNgrecordById);

// Update ngrecord by id
ngrecordsRouter.patch("/:id", handleUpdateNgrecord);

// Soft Delete ngrecord by id
ngrecordsRouter.patch("/softdelete/:id", handleSoftDeleteNgrecord);

// Delete ngrecord by id
ngrecordsRouter.delete("/:id", handleDeleteNgrecord);

export default ngrecordsRouter;
