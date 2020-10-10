// src/Library/Token.ts
import { readFile } from 'fs/promises';

interface TokenFile {
  token_type: string;
  scope: string;
  expires_in: number;
  ext_expires_in: number;
  access_token: string;
}

export async function loadToken(): Promise<TokenFile> {
  const file = await readFile('token.json');

  return JSON.parse(file.toString());
}
