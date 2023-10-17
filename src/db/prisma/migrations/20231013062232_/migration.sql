/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "Lines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lines_pkey" PRIMARY KEY ("id")
);
