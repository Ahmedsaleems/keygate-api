-- CreateEnum
CREATE TYPE "UsageLogOutcome" AS ENUM ('SUCCESS', 'API_KEY_MISSING', 'API_KEY_INVALID', 'API_KEY_REVOKED', 'ENDPOINT_NOT_FOUND', 'ENDPOINT_DISABLED', 'PERMISSION_DENIED', 'UPSTREAM_ERROR', 'GATEWAY_VALIDATION_ERROR', 'UNKNOWN_ERROR');

-- CreateTable
CREATE TABLE "usage_logs" (
    "id" TEXT NOT NULL,
    "project_id" TEXT,
    "api_key_id" TEXT,
    "endpoint_id" TEXT,
    "request_method" "EndpointMethod" NOT NULL,
    "request_path" VARCHAR(2048) NOT NULL,
    "query_string" VARCHAR(4096),
    "outcome" "UsageLogOutcome" NOT NULL,
    "gateway_status_code" INTEGER NOT NULL,
    "upstream_status_code" INTEGER,
    "error_code" VARCHAR(128),
    "duration_ms" INTEGER NOT NULL,
    "client_ip" VARCHAR(128),
    "user_agent" VARCHAR(512),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usage_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "usage_logs_project_id_created_at_id_idx" ON "usage_logs"("project_id", "created_at", "id");

-- CreateIndex
CREATE INDEX "usage_logs_api_key_id_created_at_idx" ON "usage_logs"("api_key_id", "created_at");

-- CreateIndex
CREATE INDEX "usage_logs_endpoint_id_created_at_idx" ON "usage_logs"("endpoint_id", "created_at");

-- CreateIndex
CREATE INDEX "usage_logs_project_id_outcome_created_at_idx" ON "usage_logs"("project_id", "outcome", "created_at");

-- CreateIndex
CREATE INDEX "usage_logs_created_at_id_idx" ON "usage_logs"("created_at", "id");

-- AddForeignKey
ALTER TABLE "usage_logs" ADD CONSTRAINT "usage_logs_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage_logs" ADD CONSTRAINT "usage_logs_api_key_id_fkey" FOREIGN KEY ("api_key_id") REFERENCES "api_keys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage_logs" ADD CONSTRAINT "usage_logs_endpoint_id_fkey" FOREIGN KEY ("endpoint_id") REFERENCES "project_endpoints"("id") ON DELETE CASCADE ON UPDATE CASCADE;
