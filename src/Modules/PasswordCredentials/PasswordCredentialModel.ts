// src/Modules/PasswordCredentials/PasswordCredentialModel.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class PasswordCredential {
  @Field()
  public customKeyIdentifier: string;

  @Field()
  public displayName: string;

  @Field({
    nullable: true,
  })
  public hint?: string;

  @Field(() => ID)
  public keyId: string;

  @Field({
    nullable: true,
  })
  public secretText?: string;
}
