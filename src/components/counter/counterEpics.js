import "rxjs";
import { filter, mapTo, debounceTime } from "rxjs/operators";

export const incrementEpic = action$ =>
  action$.pipe(
    filter(action => action.type === "INCREMENT_DEBOUNCED"),
    debounceTime(1000),
    mapTo({ type: "INCREMENT" })
  );

export const decrementEpic = action$ =>
  action$.pipe(
    filter(action => action.type === "DECREMENT_DEBOUNCED"),
    debounceTime(1000),
    mapTo({ type: "DECREMENT" })
  );
