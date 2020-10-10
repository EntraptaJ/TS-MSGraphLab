// src/Modules/AddIns/AddInModel.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class AddIn {
  @Field(() => ID)
  public id: string;

  @Field()
  public type: string;
}
