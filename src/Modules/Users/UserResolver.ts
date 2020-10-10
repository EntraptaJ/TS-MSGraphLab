// src/Modules/HelloWorld/HelloWorldResolver.ts
import { GraphRequest } from '@microsoft/microsoft-graph-client';
import { Arg, Query, Resolver, UseMiddleware } from 'type-graphql';
import { FilterInterceptor } from '../../Library/Filter';
import { client, MSGraphMiddleware } from '../../Library/MSGraph';
import { UserFilter } from './UserFilter';
import { User } from './UserModel';

@Resolver()
export class UserResovler {
  @UseMiddleware([FilterInterceptor, MSGraphMiddleware])
  @Query(() => [User])
  public users(
    @Arg('filter', () => UserFilter, {
      nullable: true,
    })
    _filter: UserFilter,
  ): GraphRequest {
    return client.api('/users');
  }
}
