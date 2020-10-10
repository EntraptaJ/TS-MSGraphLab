// src/Modules/Channel/ChannelResolver.ts
import { Arg, ID, Query, Resolver } from 'type-graphql';
import { loadConfig } from '../../Library/Config';
import { getTeamChannels, request } from '../../Library/MSGraph';
import { Channel } from './Channel';

@Resolver()
export class ChannelResovler {
  @Query(() => [Channel])
  public async channels(
    @Arg('teamId', () => ID) teamId: string,
  ): Promise<Channel[]> {
    return getTeamChannels(teamId);
  }
}
