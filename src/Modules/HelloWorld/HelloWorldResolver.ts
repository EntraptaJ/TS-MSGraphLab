// src/Modules/HelloWorld/HelloWorldResolver.ts
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloWorldResovler {
  @Query(() => String)
  public helloWorld(): 'helloWorld' {
    return 'helloWorld';
  }
}
