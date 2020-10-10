// src/Modules/Teams/TeamVisibility.ts
import { registerEnumType } from 'type-graphql';

export enum TeamVisibility {
  PRIVATE,
  PUBLIC,
}

registerEnumType(TeamVisibility, {
  name: 'TeamVisibility',
});
