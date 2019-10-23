/* you could revisit this.  it seems neat, but i don't think you have a strong enough
grasp on TS and generics to make this  great */

// import { IRequestAction } from "../types";

/* Return an object of Redux action creators */
/* actions: [SUCCESS, REQUESTING, FAILURE] */
// type TRequestActionFactorySuccess<T, A> = (result: A) => IRequestAction<T>;
// type TRequestActionFactoryRequesting<T> = () => T;
// type TRequestActionFactoryFailure<T> = () => T;

// interface IRequestActionFactory<T, A> {
//   success: TRequestActionFactorySuccess<T, A>;
//   requesting: TRequestActionFactoryRequesting<T>;
//   failure: TRequestActionFactoryFailure<T>;
// }

// function requestActionFactory<T, A>([SUCCESS, REQUESTING, FAILURE]: T[]) {
//   return {
//     success: (result: A): TRequestActionFactorySuccess<T, A> => {
//       return {
//         type: SUCCESS,
//         requesting: false,
//       };
//     },
//     requesting: () => {
//       return {
//         type: REQUESTING,
//         requesting: true,
//       };
//     },
//     failure: () => {
//       return {
//         type: FAILURE,
//         requesting: false,
//       };
//     },
//   };
// }

/*
const { success, requesting, failure } = requestActionFactory<TJokesActions, IJoke>(
  [Actions.SUCCESS, Actions.Requesting, Actions.FAILURE]
)

*/

// export { requestActionFactory };

/* maybe you could make a requestReducerFactory as well, maybe you'd do
{prefix}Requesting|Failure|Success or just a general top-level app requesting|failure|success
since we dont' have a lot of different requests happening (we'd only have like one loading spinner)

function(prefix) {
  return function(state, action) {
    switch (action.type) {
      case {prefix}REQUESTING:
        return {
          ...state,
          requesting: true...
        }
      case {prefix}FAILURE:
      case {prefix}SUCCESS:
      default:
    }
  }
}

you would just return a tiny three-action reducer that gets rolled into combineReducers()
later on, either by the app's root reducer or some intermediate step.

*/
