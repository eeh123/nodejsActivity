import * as dotenv from "dotenv";
import "express-async-errors";
import express, { Express, NextFunction, Request, Response } from "express";

dotenv.config();

import { PrismaClient } from "@prisma/client";
import linesRouter from "./src/modules/lines/controller";
import stationsRouter from "./src/modules/stations/controller";
import checklistsRouter from "./src/modules/checklists/controller";
import ngrecordsRouter from "./src/modules/ngrecords/controller";
import { errorHandlerMiddleware } from "./src/middleware/error";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

declare global {
  namespace Express {
    export interface Request {
      prisma: PrismaClient;
    }
  }
}

export const initPrisma = (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient();
  req.prisma = prisma;

  next();
};

app.use(initPrisma);

app.get("/", (req: Request, res: Response) => {
  console.log("triggered root route");
  res.send("Express + TypeScript Server");
});


app.use("/lines", linesRouter);
app.use("/stations", stationsRouter);
app.use("/checklists", checklistsRouter);
app.use("/ngrecords", ngrecordsRouter);

app.use(errorHandlerMiddleware);

app.listen(4001, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:4001`);
});
