import { InvalidUsageLogReferenceIdError } from './error';

export class UsageLogProjectOwnerId {
    private constructor(private readonly value: string) { }

    static fromString(value: string): UsageLogProjectOwnerId {
        const normalized = value.trim();

        if (!normalized) {
            throw new InvalidUsageLogReferenceIdError('ownerId', value);
        }

        return new UsageLogProjectOwnerId(normalized);
    }

    toString(): string {
        return this.value;
    }

    equals(other: UsageLogProjectOwnerId): boolean {
        return this.value === other.value;
    }
}