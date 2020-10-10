// src/Library/MSGraph.ts
import { loadConfig } from './Config';
import { loadToken } from './Token';
import got from 'got';
import { Channel } from '../Modules/Channel/Channel';

const appConfig = await loadConfig();
const token = await loadToken();

console.log(token);

export const request = got.extend({
  prefixUrl: 'https://graph.microsoft.com/beta/',
  resolveBodyOnly: true,
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${token.access_token}`,
  },
});

export async function getTeamChannels(teamId: string): Promise<Channel[]> {
  const channelsResponse = await request(`teams/${teamId}/channels`, {
    method: 'GET',
  });

  console.log(channelsResponse);

  return channelsResponse.value;
}
