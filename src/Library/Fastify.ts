// src/Library/Fastify.ts
import { fastify } from 'fastify';
import { writeFile } from 'fs/promises';
import got from 'got';
import { loadConfig } from './Config';

export const webServer = fastify();

const scope =
  'offline_access user.read ChannelMessage.Send Channel.ReadBasic.All Team.ReadBasic.All';

const appConfig = await loadConfig()

webServer.get('/login', async (options, res) => {
  const url = new URL(
    `https://login.microsoftonline.com/${appConfig.tenant}/oauth2/v2.0/authorize`,
  );

  url.searchParams.set('client_id', appConfig.clientId);

  url.searchParams.set('response_type', 'code');
  url.searchParams.set('redirect_uri', 'http://localhost:8080/auth');
  url.searchParams.set('response_mode', 'query');
  url.searchParams.set('state', '12345');

  url.searchParams.set('scope', scope);

  return res.redirect(url.toString());
});

webServer.get<{
  Querystring: {
    code: string;
  };
}>(
  '/auth',
  {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
          },
        },
      },
    },
  },
  async (request, response) => {
    console.log('Toekn');

    if (request.query?.code) {
      try {
        const url = new URL(
          `https://login.microsoftonline.com/${appConfig.tenant}/oauth2/v2.0/token`,
        );

        url.searchParams.set(
          'client_id',
          appConfig.clientId,
        );

        url.searchParams.set('scope', scope);

        url.searchParams.set('code', request.query.code);

        url.searchParams.set('redirect_uri', 'http://localhost:8080/auth');
        url.searchParams.set('grant_type', 'authorization_code');
        url.searchParams.set('client_secret', appConfig.clientSecret);

        console.log(url.toString());

        const response = await got.post(url.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: url.searchParams.toString(),
          throwHttpErrors: false,
        });

        await writeFile('token.json', response.body);
      } catch (err) {
        console.log(err);
      }
    }

    return 'OK';