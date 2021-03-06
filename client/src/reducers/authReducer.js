import { FETCH_USER } from "../actions/types";

export default function (state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
