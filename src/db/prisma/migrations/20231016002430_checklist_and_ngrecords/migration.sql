-- CreateTable
CREATE TABLE "Checklists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "station_id" INTEGER NOT NULL,

    CONSTRAINT "Checklists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ngrecords" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_priority" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "checklist_id" INTEGER NOT NULL,

    CONSTRAINT "Ngrecords_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Checklists" ADD CONSTRAINT "Checklists_station_id_fkey" FOREIGN KEY ("station_id") REFERENCES "Stations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ngrecords" ADD CONSTRAINT "Ngrecords_checklist_id_fkey" FOREIGN KEY ("checklist_id") REFERENCES "Checklists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
