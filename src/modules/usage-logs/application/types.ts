import { UsageLogApiKeyId } from '../domain/api-key-id.vo';
import { UsageLogEndpointId } from '../domain/endpoint-id.vo';
import { UsageLogOutcome } from '../domain/outcome.vo';

export type UsageLogFilters = {
    from?: Date;
    to?: Date;
    outcome?: UsageLogOutcome;
    apiKeyId?: UsageLogApiKeyId;
    endpointId?: UsageLogEndpointId;
};

export type UsageLogCursorPayload = {
    createdAt: string;
    id: string;
};

export function isUsageLogCursorPayload(
    value: unknown,
): value is UsageLogCursorPayload {
    if (!isPlainObject(value)) {
        return false;
    }

    const keys = Object.keys(value);

    if (
        keys.length !== 2 ||
        !keys.includes('createdAt') ||
        !keys.includes('id')
    ) {
        return false;
    }

    const createdAt = value.createdAt;
    const id = value.id;

    if (typeof createdAt !== 'string' || typeof id !== 'string') {
        return false;
    }

    if (!id.trim()) {
        return false;
    }

    return isCanonicalIsoTimestamp(createdAt);
}

function isPlainObject(
    value: unknown,
): value is Record<string, unknown> {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);

    return prototype === Object.prototype || prototype === null;
}

function isCanonicalIsoTimestamp(value: string): boolean {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return false;
    }

    return date.toISOString() === value;
}