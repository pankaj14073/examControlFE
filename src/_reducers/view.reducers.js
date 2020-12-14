import { viewConstants } from '../_constants';

export function view(state = {}, action) {
  switch (action.type) {
    case viewConstants.SHOW_LOGIN:
      return { loginVisibilty : true };
    case viewConstants.HIDE_LOGIN:
      return { loginVisibilty :false };
    default:
      return state
  }
}