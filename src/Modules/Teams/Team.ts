// src/Modules/Teams/Team.ts
import { Field, ID, ObjectType } from 'type-graphql';
import { TeamSpecialization } from './TeamSpecialization';
import { TeamVisibility } from './TeamVisibility';

@ObjectType()
export class Team {
  @Field()
  public displayName: string;

  @Field()
  public description: string;

  @Field({
    nullable: true,
  })
  public classification?: string;

  @Field(() => TeamSpecialization, {
    nullable: true,
  })
  public specialization: TeamSpecialization;

  @Field(() => TeamVisibility, {
    nullable: true,
  })
  public visibility: TeamVisibility;

  @Field(() => ID)
  public readonly id: string;

  @Field({
    nullable: true,
  })
  public createdDateTime: string;

  @Field({
    nullable: true,
  })
  public internalId: string;

  @Field()
  public isArchived: boolean;
}
