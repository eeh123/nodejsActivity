import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Ngrecords = {
  id: number;
  name: string;
  is_priority: number;
  status: number;
  checklist_id: number;
};

export const createNgrecordSchema = z.object({
  name: z.string({ required_error: "Ngrecord name is required." }),
  is_priority: z.number({ required_error: "Ngrecord's is_priority value is required." }),
  status: z.number({ required_error: "Ngrecord's status is required." }),
  checklist_id: z.number({ required_error: "Ngrecord's station_id is required." }),

});

export type CreateNgrecordSchema = z.infer<typeof createNgrecordSchema>;

export const updateNgrecordSchema = z.object({
  name: z.string().optional(),
  is_priority: z.number().optional(),
  status: z.number().optional(),
  checklist_id: z.number().optional(),
});

export type UpdateNgrecordSchema = z.infer<typeof updateNgrecordSchema>;

export const softDeleteNgrecordSchema = ({
  status: 0,
});

export type SoftDeleteNgrecordSchema = typeof softDeleteNgrecordSchema;

export const BasicNgrecordSelect: Prisma.NgrecordsSelect = {
  id: true,
  name: true,
  is_priority: true,
  status: true,
  checklist_id: true,
};
