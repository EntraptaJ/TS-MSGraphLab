// src/Modules/Channel/ChannelResolver.ts
import { GraphRequest } from '@microsoft/microsoft-graph-client';
import {
  Arg,
  ID,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';
import { client, MSGraphMiddleware } from '../../Library/MSGraph';
import { Channel } from './Channel';
import { ChannelInput } from './ChannelInput';

@Resolver()
export class ChannelResovler {
  @UseMiddleware([MSGraphMiddleware])
  @Query(() => [Channel])
  public channels(@Arg('teamId', () => ID) teamId: string): GraphRequest {
    return client.api(`/teams/${teamId}/channels`);
  }

  @UseMiddleware([MSGraphMiddleware])
  @Mutation(() => [Channel])
  public async createChannel(
    @Arg('teamId', () => ID) teamId: string,
    @Arg('input', () => ChannelInput) input: ChannelInput,
  ) {
    const createChannel = await client
      .api(`/teams/${teamId}/channels`)
      .post(input);

    return client.api(`/teams/${teamId}/channels`);
  }

  @UseMiddleware([MSGraphMiddleware])
  @Query(() => Channel)
  public channel(
    @Arg('teamId', () => ID) teamId: string,
    @Arg('channelId', () => ID) channelId: string,
  ): GraphRequest {
    return client.api(`/teams/${teamId}/channels/${channelId}`);
  }
}
