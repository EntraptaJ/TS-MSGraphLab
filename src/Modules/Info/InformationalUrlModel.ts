// src/Modules/Info/InformationalUrlModel.ts
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class InformationalUrl {
  @Field({
    nullable: true,
  })
  public readonly logoUrl?: string;

  @Field({
    nullable: true,
  })
  public marketingUrl?: string;

  @Field({
    nullable: true,
  })
  public privacyStatementUrl?: string;

  @Field({
    nullable: true,
  })
  public supportUrl?: string;

  @Field({
    nullable: true,
  })
  public termsOfServiceUrl?: string;
}
