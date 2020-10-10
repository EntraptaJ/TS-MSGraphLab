// src/Modules/Users/ExternalUserState.ts
import { registerEnumType } from 'type-graphql';

export enum ExternalUserState {
  PENDING = 'PendingAcceptance',
  ACCEPTED = 'Accepted',
}

registerEnumType(ExternalUserState, {
  name: 'ExternalUserState',
});
