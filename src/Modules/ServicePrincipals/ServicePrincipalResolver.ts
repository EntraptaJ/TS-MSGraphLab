// src/Modules/HelloWorld/HelloWorldResolver.ts
import { GraphRequest } from '@microsoft/microsoft-graph-client';
import { Query, Resolver, UseMiddleware } from 'type-graphql';
import { client, MSGraphMiddleware } from '../../Library/MSGraph';
import { ServicePrincipal } from './ServicePrincipalModel';

@Resolver()
export class ServicePrincipalResovler {
  @UseMiddleware([MSGraphMiddleware])
  @Query(() => [ServicePrincipal])
  public servicePrincipals(): GraphRequest {
    return client.api('/servicePrincipals');
  }
}
