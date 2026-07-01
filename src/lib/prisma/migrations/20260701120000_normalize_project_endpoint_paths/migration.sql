-- Refuse to guess how invalid legacy paths should be repaired.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM "project_endpoints"
        WHERE NOT (
            "path" = '/'
            OR (
                char_length(
                    CASE
                        WHEN right("path", 1) = '/'
                            THEN left("path", char_length("path") - 1)
                        ELSE "path"
                    END
                ) <= 300
                AND "path" NOT LIKE '%//%'
                AND "path" ~ '^/([A-Za-z0-9._~-][A-Za-z0-9._~:-]*|:[A-Za-z_][A-Za-z0-9_]*)(/([A-Za-z0-9._~-][A-Za-z0-9._~:-]*|:[A-Za-z_][A-Za-z0-9_]*))*/?$'
            )
        )
    ) THEN
        RAISE EXCEPTION 'Cannot normalize project endpoint paths because invalid legacy paths exist.';
    END IF;
END $$;

-- Canonicalization can expose duplicates that the previous exact-path index allowed.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM (
            SELECT
                "project_id",
                "method",
                CASE
                    WHEN "path" <> '/' AND right("path", 1) = '/'
                        THEN left("path", char_length("path") - 1)
                    ELSE "path"
                END AS "normalized_path"
            FROM "project_endpoints"
        ) AS "normalized_endpoints"
        GROUP BY "project_id", "method", "normalized_path"
        HAVING count(*) > 1
    ) THEN
        RAISE EXCEPTION 'Cannot normalize project endpoint paths because canonical path conflicts exist.';
    END IF;
END $$;

UPDATE "project_endpoints"
SET "path" = left("path", char_length("path") - 1)
WHERE "path" <> '/'
  AND right("path", 1) = '/';
