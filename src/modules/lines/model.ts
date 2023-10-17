import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Lines = {
  id: number;
  name: string;
  status: number;
};

export const createLineSchema = z.object({
  name: z.string({ required_error: "Line name is required." }),
  status: z.number({ required_error: "Line status is required." }),
  date_created: z.string().optional(),
  date_modified: z.string().optional(),
});

export type CreateLineSchema = z.infer<typeof createLineSchema>;

export const updateLineSchema = z.object({
  name: z.string().optional(),
  status: z.number().optional(),
  date_created: z.string().optional(),
  date_modified: z.string().optional(),
});

export type UpdateLineSchema = z.infer<typeof updateLineSchema>;

export const loginSchema = z.object({
  username: z.string({ required_error: "Username is required." }),
  password: z.string({ required_error: "Password is required." }),
});

export const BasicLineSelect: Prisma.LinesSelect = {
  id: true,
  name: true,
  status: true,
  date_created: true,
  date_modified: true,
};
