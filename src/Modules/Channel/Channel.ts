// src/Modules/Channel/Channel.ts
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Channel {
  @Field(() => ID)
  public readonly id: string;

  @Field(() => Date, {
    nullable: true,
  })
  public readonly createdDateTime?: Date;

  @Field()
  public displayName: string;

  @Field({
    nullable: true,
  })
  public description: string;

  @Field({
    nullable: true,
  })
  public isFavoriteByDefault: boolean;

  @Field()
  public email: string;

  @Field()
  public webUrl: string;

  @Field()
  public membershipType: string;
}
