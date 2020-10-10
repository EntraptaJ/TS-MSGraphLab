// src/Modules/Teams/TeamSpecialization.ts

import { registerEnumType } from 'type-graphql';

export enum TeamSpecialization {
  NONE,
  educationStandard,
  educationClass,
  educationProfessionalLearningCommunity,
  educationStaff,
}

registerEnumType(TeamSpecialization, {
  name: 'teamSpecialization',
});
