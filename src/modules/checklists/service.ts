import { Request, Response } from "express";
import { BasicChecklistSelect, createChecklistSchema, updateChecklistSchema } from "./model";

// Create a checklist
export async function handleCreateChecklist(req: Request, res: Response) {
  const payload = createChecklistSchema.parse(req.body);

  const result = await req.prisma.checklists.create({
    data: payload,
    select: BasicChecklistSelect,
  });

  return res.status(201).json(result);
}

// Get list of checklist
export async function handleGetChecklistList(req: Request, res: Response) {
  const prisma = req.prisma;
  const checklists = await prisma.checklists.findMany({
    select: BasicChecklistSelect,
  });
  return res.status(200).json(checklists);
}

// Get checklist by id
export async function handleGetChecklistById(req: Request, res: Response) {
  const checklistId = req.params.id;
  const checklist = await req.prisma.checklists.findFirstOrThrow({
    where: {
      id: parseInt(checklistId),
    },
    select: BasicChecklistSelect,
  });

  return res.status(200).json(checklist);
}

// Update checklist by id
export async function handleUpdateChecklist(req: Request, res: Response) {
  const checklistId = req.params.id;
  const payload = updateChecklistSchema.parse(req.body);

  const result = await req.prisma.checklists.update({
    data: payload,
    where: {
      id: parseInt(checklistId),
    },
    select: BasicChecklistSelect,
  });

  return res.status(200).json(result);
}

// Delete checklist by id
export async function handleDeleteChecklist(req: Request, res: Response) {
  const checklistId = req.params.id;

  const result = await req.prisma.checklists.delete({
    where: {
      id: parseInt(checklistId),
    },
    select: BasicChecklistSelect,
  });

  return res.status(200).json(result);
}
