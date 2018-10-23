import * as types from './constants';
import { actions } from '../';

export const login = session => {
  // async call
  return async dispatch => {
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    dispatch(actions.app.loading());

    const identity = { name: 'test' };

    if (session) {
      dispatch({
        type: types.LOGIN,
        payload: {
          session,
          identity
        }
      });
    }
    // turn loading animation off
    dispatch(actions.app.loading(false));
  };
};

/**
 * Sign out.
 */
export const logout = () => {
  return async dispatch => {
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    dispatch(actions.app.loading());

    await oauth.logout();
    dispatch({
      type: types.LOGOUT,
      payload: {}
    });
    // turn loading animation off
    dispatch(actions.app.loading(false));
  };
};

export const getPost = () => {
  return async dispatch => {
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    //dispatch(actions.app.loading());

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    console.log(json);

    dispatch({
      type: types.POST,
      payload: json
    });
    // turn loading animation off
    //dispatch(actions.app.loading(false));
  };
};
