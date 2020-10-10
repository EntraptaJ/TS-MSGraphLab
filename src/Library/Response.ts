// src/Library/Response.ts
import { ClassType, Field, ObjectType } from 'type-graphql';

export function ValueResponse<TItem>(TItemClass: ClassType<TItem>) {
  // `isAbstract` decorator option is mandatory to prevent registering in schema
  @ObjectType({ isAbstract: true })
  abstract class ValueResponseClass {
    // here we use the runtime argument
    @Field(() => [TItemClass])
    // and here the generic type
    public value: TItem[];
  }
  return ValueResponseClass;
}
