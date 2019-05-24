import { GET_USER_LIST } from "../api/actions/types";

// users reducer
export default function users(state = {}, action) {
  switch (action.type) {
    case "USERS_LIST_SAVE":
      return action.users;

    case "USERS_ADD_SAVE":
      const user = action.user;
      user.id = user.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, user];

    case "USERS_EDIT_SAVE":
      return state.map(user =>
        Number(user.id) === Number(action.user.id) ? { ...action.user } : user
      );
      break;

    case "USERS_DELETE_SAVE":
      return state.filter(user => Number(user.id) !== Number(action.user_id));

    case GET_USER_LIST:
      return action.users.data;

    // initial state
    default:
      return state;
  }
}
