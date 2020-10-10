// src/Modules/AppRoles/AppRoleModel.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class AppRole {
  @Field(() => [String])
  public allowedMemberTypes: string[];

  @Field()
  public description: string;

  @Field()
  public displayName: string;

  @Field(() => ID)
  public readonly id: string;
}
