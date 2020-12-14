import { viewConstants } from '../_constants';

export const viewActions = {
    showLogin,
    hideLogin
};

function showLogin() {
    return dispatch => {
        dispatch({ type: viewConstants.SHOW_LOGIN });
    };
}

function hideLogin() {
    return dispatch => {
        dispatch({ type: viewConstants.HIDE_LOGIN });
    };
}
