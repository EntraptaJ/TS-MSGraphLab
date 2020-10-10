// src/Modules/Licenses/AssignedLicense.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class AssignedLicense {
  @Field(() => [String])
  public disabledPlans: string[];

  @Field(() => ID)
  public skuId: string;
}
