// src/Modules/Users/UserFilter.ts
import { Field, InputType } from 'type-graphql';
import { User } from './UserModel';

@InputType()
export class UserFilter implements Partial<User> {
  @Field({
    nullable: true,
  })
  public displayName?: string;
}
