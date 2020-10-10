// src/Modules/Users/PasswordProfiles.ts
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class PasswordProfile {
  @Field(() => Boolean)
  public forceChangePasswordNextSignIn: boolean;

  @Field(() => Boolean)
  public forceChangePasswordNextSignInWithMfa: boolean;

  @Field({
    nullable: true,
  })
  public password?: string;
}
