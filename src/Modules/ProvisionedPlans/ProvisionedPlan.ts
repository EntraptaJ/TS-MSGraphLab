// src/Modules/ProvisionedPlans/ProvisionedPlan.ts
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProvisionedPlan {
  @Field()
  public capabilityStatus: string;

  @Field()
  public provisioningStatus: string;

  @Field()
  public service: string;
}
