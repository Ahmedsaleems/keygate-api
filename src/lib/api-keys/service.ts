import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Config } from './config';

export type GeneratedApiKeyCredential = {
  rawKey: string;
  prefix: string;
  hash: string;
};

@Injectable()
export class ApiKeyService {
  constructor(private readonly config: Config) {}

  generate(): GeneratedApiKeyCredential {
    const prefix = this.config.prefix;
    const secretPart = randomBytes(this.config.randomBytesLength).toString(
      'base64url',
    );

    const rawKey = `${prefix}_${secretPart}`;
    const hash = this.hash(rawKey);

    return {
      rawKey,
      prefix,
      hash,
    };
  }

  hash(rawKey: string): string {
    return createHmac('sha256', this.config.hmacSecret)
      .update(rawKey)
      .digest('hex');
  }

  verify(rawKey: string, storedHash: string): boolean {
    const computedHash = this.hash(rawKey);

    return this.safeCompare(computedHash, storedHash);
  }

  private safeCompare(left: string, right: string): boolean {
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);

    if (leftBuffer.length !== rightBuffer.length) {
      return false;
    }

    return timingSafeEqual(leftBuffer, rightBuffer);
  }
}