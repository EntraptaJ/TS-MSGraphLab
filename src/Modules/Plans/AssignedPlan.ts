// src/Modules/Plans/AssignedPlan.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class AssignedPlan {
  @Field()
  public assignedDateTime: string;

  @Field()
  public capabilityStatus: string;

  @Field()
  public service: string;

  @Field(() => ID)
  public servicePlanId: string;
}
