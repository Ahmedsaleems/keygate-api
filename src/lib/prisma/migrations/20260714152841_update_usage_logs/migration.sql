/*
  Warnings:

  - A unique constraint covering the columns `[created_at,id]` on the table `usage_logs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "usage_logs_created_at_id_idx";

-- CreateIndex
CREATE UNIQUE INDEX "usage_logs_created_at_id_key" ON "usage_logs"("created_at", "id");
