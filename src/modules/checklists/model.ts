import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Checklists = {
  id: number;
  name: string;
  status: number;
  station_id: number;
};

export const createChecklistSchema = z.object({
  name: z.string({ required_error: "Checklist name is required." }),
  status: z.number({ required_error: "Checklist's status is required." }),
  station_id: z.number({ required_error: "Checklist's station_id is required." }),

});

export type CreateChecklistSchema = z.infer<typeof createChecklistSchema>;

export const updateChecklistSchema = z.object({
  name: z.string().optional(),
  status: z.number().optional(),
  station_id: z.number().optional(),
});

export type UpdateChecklistSchema = z.infer<typeof updateChecklistSchema>;

export const BasicChecklistSelect: Prisma.ChecklistsSelect = {
  id: true,
  name: true,
  status: true,
  station_id: true,
};
