// src/Library/Resolvers.ts
import { ResolverFn } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import 'reflect-metadata';
import { buildSchema, NonEmptyArray } from 'type-graphql';
import { findModuleFiles } from '../Utils/moduleFileFinder';

/**
 * Load all TypeGraphQL Resolver Modules
 *
 * @returns Array containing TypeGraphQL Resolver Module files from `srsc/Modules/` matching `*Resolver.(ts|js)x?`
 */
export async function getResolvers(): Promise<NonEmptyArray<ResolverFn>> {
  const resolverModules = await findModuleFiles(/.*Resolver\.((ts|js)x?)/);

  return resolverModules.flatMap((resolverModule) =>
    Object.values(resolverModule as { [key: string]: ResolverFn }),
  ) as NonEmptyArray<ResolverFn>;
}

/**
 * Build GraphQL Schema from TypeGraphQL Resolvers
 * @param resolvers Array of TypeGraphQL Resolvers
 */
export async function buildGQLSchema(
  resolvers: NonEmptyArray<ResolverFn>,
): Promise<GraphQLSchema> {
  return buildSchema({
    resolvers: resolvers,
  });
}
