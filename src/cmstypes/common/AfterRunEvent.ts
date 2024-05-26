// Interface automatically generated by schemas-to-ts

import { BeforeRunEvent } from "./BeforeRunEvent";

export interface AfterRunEvent<TState, TResult>
  extends BeforeRunEvent<
    TState extends Record<string, unknown> ? TState : never
  > {
  result: TResult;
}