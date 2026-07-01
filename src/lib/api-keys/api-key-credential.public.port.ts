import { GeneratedApiKeyCredential } from './api-key-credential.public.types';

export const API_KEY_CREDENTIAL_PUBLIC_PORT = Symbol(
  'API_KEY_CREDENTIAL_PUBLIC_PORT',
);

export interface ApiKeyCredentialPublicPort {
  generate(): GeneratedApiKeyCredential;

  hash(rawKey: string): string;
}
