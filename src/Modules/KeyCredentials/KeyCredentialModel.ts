// src/Modules/KeyCredentials/KeyCredentialModel.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class KeyCredential {
  @Field()
  public customKeyIdentifier: string;

  @Field({
    nullable: true,
  })
  public displayName: string;

  @Field(() => ID)
  public keyId: string;

  @Field()
  public type: string;

  @Field()
  public usage: string;

  @Field({
    nullable: true,
  })
  public key: string;
}
