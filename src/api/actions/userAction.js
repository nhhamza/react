import { GET_USER_LIST } from "./types";

export function getUserList(users) {
  return {
    type: GET_USER_LIST,
    users,
  };
}
