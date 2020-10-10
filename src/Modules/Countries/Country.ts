// src/Modules/Countries/Country.ts
import { registerEnumType } from 'type-graphql';

export enum Country {
  CANADA = 'CA',
  USA = 'US',
  UK = 'UK',
}

registerEnumType(Country, {
  name: 'Country',
});
