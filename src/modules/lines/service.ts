import { Request, Response } from "express";
import { BasicLineSelect, createLineSchema, updateLineSchema } from "./model";

// Create a line
export async function handleCreateLine(req: Request, res: Response) {
  const payload = createLineSchema.parse(req.body);

  const result = await req.prisma.lines.create({
    data: payload,
    select: BasicLineSelect,
  });

  return res.status(201).json(result);
}

// Get list of lines
export async function handleGetLineList(req: Request, res: Response) {
  const prisma = req.prisma;
  const lines = await prisma.lines.findMany({
    select: BasicLineSelect,
  });
  return res.status(200).json(lines);
}

// Get line by id
export async function handleGetLineById(req: Request, res: Response) {
  const lineId = req.params.id;
  const line = await req.prisma.lines.findFirstOrThrow({
    where: {
      id: parseInt(lineId),
    },
    select: BasicLineSelect,
  });

  return res.status(200).json(line);
}

// Update line by id
export async function handleUpdateLine(req: Request, res: Response) {
  const lineId = req.params.id;
  const payload = updateLineSchema.parse(req.body);

  const result = await req.prisma.lines.update({
    data: payload,
    where: {
      id: parseInt(lineId),
    },
    select: BasicLineSelect,
  });

  return res.status(200).json(result);
}

// Delete line by id
export async function handleDeleteLine(req: Request, res: Response) {
  const lineId = req.params.id;

  const result = await req.prisma.lines.delete({
    where: {
      id: parseInt(lineId),
    },
    select: BasicLineSelect,
  });

  return res.status(200).json(result);
}
