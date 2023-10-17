-- CreateTable
CREATE TABLE "Stations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "is_last" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "line_id" INTEGER NOT NULL,

    CONSTRAINT "Stations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Stations" ADD CONSTRAINT "Stations_line_id_fkey" FOREIGN KEY ("line_id") REFERENCES "Lines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
