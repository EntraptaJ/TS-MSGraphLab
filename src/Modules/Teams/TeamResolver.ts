// src/Modules/HelloWorld/HelloWorldResolver.ts
import { GraphRequest } from '@microsoft/microsoft-graph-client';
import {
  Extensions,
  FieldResolver,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import {
  client,
  getTeamChannels,
  MSGraphMiddleware,
} from '../../Library/MSGraph';
import { ValueResponse } from '../../Library/Response';
import { Channel } from '../Channels/Channel';
import { Team } from './Team';

@ObjectType()
class TeamsResponse extends ValueResponse(Team) {}

@Resolver(() => Team)
export class TeamResovler {
  @UseMiddleware([MSGraphMiddleware])
  @Extensions({ apiPath: '/me/joinedTeams' })
  @Query(() => [Team])
  public myTeams(): GraphRequest {
    return client.api('/me/joinedTeams');
  }

  @FieldResolver(() => [Channel])
  public channels(@Root() team: Team): Promise<Channel[]> {
    return getTeamChannels(team.id);
  }
}
