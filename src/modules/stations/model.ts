import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Stations = {
  id: number;
  name: string;
  alias: string;
  is_last: number;
  status: number;
  line_id: number;
};

export const createStationSchema = z.object({
  name: z.string({ required_error: "Station name is required." }),
  alias: z.string({ required_error: "Station alias is required." }),
  is_last: z.number({ required_error: "Station's is_last value is required." }),
  status: z.number({ required_error: "Station's status is required." }),
  line_id: z.number({ required_error: "Station's line_id is required." }),

});

export type CreateStationSchema = z.infer<typeof createStationSchema>;

export const updateStationSchema = z.object({
  name: z.string().optional(),
  alias: z.string().optional(),
  is_last: z.number().optional(),
  status: z.number().optional(),
  line_id: z.number().optional(),
});

export type UpdateStationSchema = z.infer<typeof updateStationSchema>;

export const softDeleteStationSchema = ({
  status: 0,
});

export type SoftDeleteStationSchema = typeof softDeleteStationSchema;

export const BasicStationSelect: Prisma.StationsSelect = {
  id: true,
  name: true,
  alias: true,
  is_last: true,
  status: true,
  line_id: true,
};
