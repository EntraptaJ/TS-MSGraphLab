// src/Modules/Teams/Team.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Team {
  @Field(() => ID)
  public readonly id: string;

  @Field(() => Date, {
    nullable: true,
  })
  public createdDateTime: Date;

  @Field()
  public displayName: string;

  @Field()
  public description: string;

  @Field({
    nullable: true,
  })
  public internalId: string;

  @Field({
    nullable: true,
  })
  public classification: string;

  @Field()
  public isArchived: boolean;
}
