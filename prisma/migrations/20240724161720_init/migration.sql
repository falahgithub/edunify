/*
  Warnings:

  - Made the column `image` on table `Schools` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Schools` MODIFY `image` VARCHAR(191) NOT NULL;
