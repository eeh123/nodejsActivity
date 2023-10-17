import { Request, Response } from "express";
import { BasicNgrecordSelect, createNgrecordSchema, updateNgrecordSchema, softDeleteNgrecordSchema } from "./model";

// Create a ngrecord
export async function handleCreateNgrecord(req: Request, res: Response) {
  const payload = createNgrecordSchema.parse(req.body);

  const result = await req.prisma.ngrecords.create({
    data: payload,
    select: BasicNgrecordSelect,
  });

  return res.status(201).json(result);
}

// Get list of ngrecord
export async function handleGetNgrecordList(req: Request, res: Response) {
  const prisma = req.prisma;
  const ngrecord = await prisma.ngrecords.findMany({
    select: BasicNgrecordSelect,
  });
  return res.status(200).json(ngrecord);
}

// Get ngrecord by id
export async function handleGetNgrecordById(req: Request, res: Response) {
  const ngrecordId = req.params.id;
  const ngrecord = await req.prisma.ngrecords.findFirstOrThrow({
    where: {
      id: parseInt(ngrecordId),
    },
    select: BasicNgrecordSelect,
  });

  return res.status(200).json(ngrecord);
}

// Update ngrecord by id
export async function handleUpdateNgrecord(req: Request, res: Response) {
  const ngrecordId = req.params.id;
  const payload = updateNgrecordSchema.parse(req.body);

  const result = await req.prisma.ngrecords.update({
    data: payload,
    where: {
      id: parseInt(ngrecordId),
    },
    select: BasicNgrecordSelect,
  });

  return res.status(200).json(result);
}

// Soft Delete ngrecord by id
export async function handleSoftDeleteNgrecord(req: Request, res: Response) {
  const ngrecordId = req.params.id;
  const payload = softDeleteNgrecordSchema;

  const result = await req.prisma.ngrecords.update({
    data: payload,
    where: {
      id: parseInt(ngrecordId),
    },
    select: BasicNgrecordSelect,
  });

  return res.status(200).json(result);
}

// Delete ngrecord by id
export async function handleDeleteNgrecord(req: Request, res: Response) {
  const ngrecordId = req.params.id;

  const result = await req.prisma.ngrecords.delete({
    where: {
      id: parseInt(ngrecordId),
    },
    select: BasicNgrecordSelect,
  });

  return res.status(200).json(result);
}
