-- DropForeignKey
ALTER TABLE "Checklists" DROP CONSTRAINT "Checklists_station_id_fkey";

-- DropForeignKey
ALTER TABLE "Ngrecords" DROP CONSTRAINT "Ngrecords_checklist_id_fkey";

-- DropForeignKey
ALTER TABLE "Stations" DROP CONSTRAINT "Stations_line_id_fkey";

-- AddForeignKey
ALTER TABLE "Stations" ADD CONSTRAINT "Stations_line_id_fkey" FOREIGN KEY ("line_id") REFERENCES "Lines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklists" ADD CONSTRAINT "Checklists_station_id_fkey" FOREIGN KEY ("station_id") REFERENCES "Stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ngrecords" ADD CONSTRAINT "Ngrecords_checklist_id_fkey" FOREIGN KEY ("checklist_id") REFERENCES "Checklists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
