// src/Modules/Users/SignInActivity.ts
import { Field, ObjectType } from 'type-graphql';

@ObjectType({
  description:
    'https://docs.microsoft.com/en-us/graph/api/resources/signinactivity?view=graph-rest-beta',
})
export class SignInActivity {
  @Field()
  public lastSignInDateTime: string;

  @Field()
  public lastSignInRequestId: string;
}
