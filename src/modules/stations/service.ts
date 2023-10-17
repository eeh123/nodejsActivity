import { Request, Response } from "express";
import { BasicStationSelect, createStationSchema, updateStationSchema, softDeleteStationSchema } from "./model";

// Create a station
export async function handleCreateStation(req: Request, res: Response) {
  const payload = createStationSchema.parse(req.body);

  const result = await req.prisma.stations.create({
    data: payload,
    select: BasicStationSelect,
  });

  return res.status(201).json(result);
}

// Get list of station
export async function handleGetStationList(req: Request, res: Response) {
  const prisma = req.prisma;
  const stations = await prisma.stations.findMany({
    select: BasicStationSelect,
  });
  return res.status(200).json(stations);
}

// Get station by id
export async function handleGetStationById(req: Request, res: Response) {
  const stationId = req.params.id;
  const station = await req.prisma.stations.findFirstOrThrow({
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationSelect,
  });

  return res.status(200).json(station);
}

// Update station by id
export async function handleUpdateStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = updateStationSchema.parse(req.body);

  const result = await req.prisma.stations.update({
    data: payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationSelect,
  });

  return res.status(200).json(result);
}

// Soft Delete station by id
export async function handleSoftDeleteStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = softDeleteStationSchema;

  const result = await req.prisma.stations.update({
    data: payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationSelect,
  });

  return res.status(200).json(result);
}

// Delete station by id
export async function handleDeleteStation(req: Request, res: Response) {
  const stationId = req.params.id;

  const result = await req.prisma.stations.delete({
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationSelect,
  });

  return res.status(200).json(result);
}
