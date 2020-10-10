// src/Modules/HelloWorld/HelloWorldResolver.ts
import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { loadConfig } from '../../Library/Config';
import { getTeamChannels, request } from '../../Library/MSGraph';
import { Channel } from '../Channel/Channel';
import { Team } from './Team';

const config = await loadConfig();

@Resolver(() => Team)
export class TeamResovler {
  @Query(() => [Team])
  public async teams(): Promise<Team[]> {
    const teams = [];

    const teamsResponse = await request<{ value: Team[] }>('me/joinedTeams', {
      method: 'GET',
    });

    console.log(teamsResponse);

    return teamsResponse.value;
  }

  @FieldResolver(() => [Channel])
  public channels(@Root() team: Team): Promise<Channel[]> {
    return getTeamChannels(team.id);
  }
}
