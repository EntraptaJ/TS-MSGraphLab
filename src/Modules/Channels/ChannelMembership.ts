// src/Modules/Channels/ChannelMembership.ts
import { registerEnumType } from 'type-graphql';

export enum ChannelMembership {
  STANDARD = 'standard',
  PRIVATE = 'private',
  OTHER = 'tbd',
}

registerEnumType(ChannelMembership, {
  name: 'ChannelMembership',
});
