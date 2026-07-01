-- AlterTable
ALTER TABLE "project_endpoints" ADD COLUMN "route_shape" TEXT;

-- Backfill the route shape from the canonical endpoint path.
UPDATE "project_endpoints" AS "endpoint"
SET "route_shape" = CASE
    WHEN "endpoint"."path" = '/' THEN '/'
    ELSE (
        SELECT '/' || string_agg(
            CASE
                WHEN "segment" LIKE ':%' THEN ':param'
                ELSE "segment"
            END,
            '/' ORDER BY "position"
        )
        FROM unnest(
            string_to_array(substring("endpoint"."path" FROM 2), '/')
        ) WITH ORDINALITY AS "segments"("segment", "position")
    )
END;

-- Refuse to choose between endpoints that already have the same route shape.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM "project_endpoints"
        GROUP BY "project_id", "method", "route_shape"
        HAVING count(*) > 1
    ) THEN
        RAISE EXCEPTION 'Cannot enforce project endpoint route-shape uniqueness because conflicting endpoints exist.';
    END IF;
END $$;

-- AlterTable
ALTER TABLE "project_endpoints" ALTER COLUMN "route_shape" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "project_endpoints_project_id_method_route_shape_key" ON "project_endpoints"("project_id", "method", "route_shape");

-- DropIndex
DROP INDEX "project_endpoints_project_id_method_path_key";
