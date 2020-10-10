/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/Library/MSGraph.ts
import 'isomorphic-fetch';
import { loadConfig } from './Config';
import { loadToken } from './Token';
import got from 'got';
import { Channel } from '../Modules/Channel/Channel';
import {
  AuthenticationProvider,
  Client,
  AuthenticationHandler,
  GraphRequest,
} from '@microsoft/microsoft-graph-client';
import {
  MiddlewareFn,
  MiddlewareInterface,
  NextFn,
  ResolverData,
} from 'type-graphql';
import { Context } from 'vm';
import { writeFile } from 'fs/promises';

const appConfig = await loadConfig();

const token = await loadToken();

export default class SimpleAuthProvider implements AuthenticationProvider {
  public getAccessToken = async (): Promise<string> => {
    const token = await loadToken();

    return token.access_token;
  };
}

const authProvider = new SimpleAuthProvider();
// Create an authentication handler that uses custom auth provider
const authHandler = new AuthenticationHandler(authProvider);

export const client = Client.initWithMiddleware({
  defaultVersion: 'beta',
  debugLogging: true,
  authProvider,
});

export const request = got.extend({
  prefixUrl: 'https://graph.microsoft.com/beta/',
  resolveBodyOnly: true,
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${token.access_token}`,
  },
});

export async function getTeamChannels(teamId: string): Promise<Channel[]> {
  const channelsResponse = await client.api(`/teams/${teamId}/channels`).get();

  console.log(channelsResponse);

  return channelsResponse.value;
}

function isGraphRequest(request: GraphRequest): request is GraphRequest {
  if ('select' in request) {
    return true;
  }

  return false;
}

export async function MSGraphMiddleware(
  action: ResolverData<Context>,
  next: NextFn,
): Promise<any> {
  const result = await next();

  if (isGraphRequest(result)) {
    let selections = action.info.fieldNodes[0].selectionSet?.selections;

    if (!selections) {
      return result;
    }

    const response = await result
      .select(
        selections
          .map((selection) =>
            'name' in selection ? selection.name.value : undefined,
          )
          .join(','),
      )
      .get();

    console.log(response);

    if ('value' in response) {
      return response.value;
    }

    return response;
  }

  return result;
}

export const MSGInterceptor: MiddlewareFn = async (shit, next) => {
  const result = await next();

  console.log(shit, result);

  return result;
};
