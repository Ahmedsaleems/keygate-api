-- CreateEnum
CREATE TYPE "EndpointMethod" AS ENUM ('GET', 'POST', 'PUT', 'PATCH', 'DELETE');

-- CreateEnum
CREATE TYPE "EndpointStatus" AS ENUM ('ENABLED', 'DISABLED');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_endpoints" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "method" "EndpointMethod" NOT NULL,
    "path" TEXT NOT NULL,
    "upstream_url" TEXT NOT NULL,
    "status" "EndpointStatus" NOT NULL DEFAULT 'ENABLED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_endpoints_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "projects_owner_id_idx" ON "projects"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_owner_id_name_key" ON "projects"("owner_id", "name");

-- CreateIndex
CREATE INDEX "project_endpoints_project_id_idx" ON "project_endpoints"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_endpoints_project_id_method_path_key" ON "project_endpoints"("project_id", "method", "path");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_endpoints" ADD CONSTRAINT "project_endpoints_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
