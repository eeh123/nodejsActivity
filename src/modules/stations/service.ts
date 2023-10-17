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

// [Cascading] Soft Delete station by id --NOT WORKING!!!
export async function handleSoftDeleteStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = softDeleteStationSchema;

  // Soft deletes station [Working]
  const result = await req.prisma.stations.update({
    data: payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationSelect,
  });


  //get checklist ids w/ stationIds equal to the station to be soft deleted
  const stationChklsts = await req.prisma.checklists.findMany({
    where: {
      station_id: parseInt(stationId)
    },
    select:{
      id: true
    }
  });

  //get ngrecord ids w/ checklistIds equal to the checklist affected by the soft deleted station
  const getCids = () => {
    const cidArr: Array<number> = [];
    stationChklsts.forEach(checklist => {
      cidArr.push(checklist.id);
      return cidArr;
    })
    return cidArr;
  }
  const cids = getCids();
  const chklstNgrecords = await req.prisma.ngrecords.findMany({
    where: {
      checklist_id: {
        in: cids
      }
    },
    select: {
      id: true
    }
  })
  


  //==================NOT WORKING==================
  // Soft deletes checklists of the station
  stationChklsts.forEach(checklist => {
    req.prisma.checklists.update({
      data: payload,
      where: {
        id: checklist.id
      },
      select: {
        id: true
      }
    });
  });

  //==================NOT WORKING==================
  // Soft deletes ngrecords of the checklists of the station
  chklstNgrecords.forEach(ngrecords => {
    req.prisma.ngrecords.update({
      data: payload,
      where: {
        id: ngrecords.id
      },
    });
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
