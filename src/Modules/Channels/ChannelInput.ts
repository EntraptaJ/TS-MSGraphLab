// src/Modules/Channels/ChannelInput.ts
import { Field, InputType } from 'type-graphql';
import { Channel } from './Channel';
import { ChannelMembership } from './ChannelMembership';

@InputType()
export class ChannelInput implements Partial<Channel> {
  @Field()
  public displayName: string;

  @Field({
    nullable: true,
  })
  public description?: string;

  @Field(() => ChannelMembership, {
    nullable: true,
  })
  public membershipType?: ChannelMembership;
}
