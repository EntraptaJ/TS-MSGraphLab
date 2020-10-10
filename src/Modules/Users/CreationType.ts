// src/Modules/Users/CreationType.ts
import { registerEnumType } from 'type-graphql';

export enum UserCreationType {
  AZURE_AD = 'LocalAccount',
  EMAIL = 'EmailVerified',
  IVITATION = 'Invitation',
}

registerEnumType(UserCreationType, {
  name: 'CreationType',
});
