// src/Modules/Channel/Channel.ts
import { Field, ID, ObjectType } from 'type-graphql';
import { ChannelMembership } from './ChannelMembership';

@ObjectType()
export class Channel {
  @Field({
    nullable: true,
  })
  public description: string;

  @Field()
  public displayName: string;

  @Field(() => ID)
  public readonly id: string;

  @Field({
    nullable: true,
  })
  public isFavoriteByDefault: boolean;

  @Field()
  public email: string;

  @Field()
  public webUrl: string;

  @Field({
    nullable: true,
  })
  public readonly createdDateTime?: string;

  @Field(() => ChannelMembership)
  public membershipType: ChannelMembership;
}
