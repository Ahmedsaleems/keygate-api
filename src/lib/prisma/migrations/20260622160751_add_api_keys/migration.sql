-- CreateEnum
CREATE TYPE "ApiKeyStatus" AS ENUM ('ACTIVE', 'REVOKED');

-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "key_hash" TEXT NOT NULL,
    "status" "ApiKeyStatus" NOT NULL DEFAULT 'ACTIVE',
    "revoked_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_key_endpoint_permissions" (
    "id" TEXT NOT NULL,
    "api_key_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "endpoint_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "api_key_endpoint_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_hash_key" ON "api_keys"("key_hash");

-- CreateIndex
CREATE INDEX "api_keys_project_id_idx" ON "api_keys"("project_id");

-- CreateIndex
CREATE INDEX "api_keys_prefix_idx" ON "api_keys"("prefix");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_project_id_name_key" ON "api_keys"("project_id", "name");

-- CreateIndex
CREATE INDEX "api_key_endpoint_permissions_api_key_id_idx" ON "api_key_endpoint_permissions"("api_key_id");

-- CreateIndex
CREATE INDEX "api_key_endpoint_permissions_project_id_idx" ON "api_key_endpoint_permissions"("project_id");

-- CreateIndex
CREATE INDEX "api_key_endpoint_permissions_endpoint_id_idx" ON "api_key_endpoint_permissions"("endpoint_id");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_endpoint_permissions_api_key_id_endpoint_id_key" ON "api_key_endpoint_permissions"("api_key_id", "endpoint_id");

-- AddForeignKey
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_key_endpoint_permissions" ADD CONSTRAINT "api_key_endpoint_permissions_api_key_id_fkey" FOREIGN KEY ("api_key_id") REFERENCES "api_keys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_key_endpoint_permissions" ADD CONSTRAINT "api_key_endpoint_permissions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_key_endpoint_permissions" ADD CONSTRAINT "api_key_endpoint_permissions_endpoint_id_fkey" FOREIGN KEY ("endpoint_id") REFERENCES "project_endpoints"("id") ON DELETE CASCADE ON UPDATE CASCADE;
