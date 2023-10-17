import { Router } from "express";
import {
  handleCreateStation,
  handleDeleteStation,
  handleGetStationById,
  handleGetStationList,
  handleUpdateStation,
  handleSoftDeleteStation,
} from "./service";

const stationsRouter = Router();

// Create station
stationsRouter.post("/", handleCreateStation);

// Get list of stations
stationsRouter.get("/", handleGetStationList);

// Get station by id
stationsRouter.get("/:id", handleGetStationById);

// Update station by id
stationsRouter.patch("/:id", handleUpdateStation);

// Soft Delete station by id
stationsRouter.patch("/softdelete/:id", handleSoftDeleteStation);

// Delete station by id
stationsRouter.delete("/:id", handleDeleteStation);

export default stationsRouter;
