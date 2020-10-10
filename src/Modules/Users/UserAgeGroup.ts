// src/Modules/Users/UserAgeGroup.ts
import { registerEnumType } from 'type-graphql';

export enum UserAgeGroup {
  MINOR = 'minor',
  NOT_ADULT = 'notAdult',
  ADULT = 'Adult',
}

registerEnumType(UserAgeGroup, {
  name: 'UserAgeGroup',
  description:
    'Sets the age group of the user. Allowed values: null, minor, notAdult and adult. Refer to the legal age group property definitions for further information',
});
