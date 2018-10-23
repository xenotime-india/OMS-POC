import { handleActions } from 'redux-actions';

import { LOGIN, LOGOUT, POST } from './constants';

const initialState = {
  loggedIn: true,
  session: {},
  identity: {},
  posts: []
};

export default handleActions(
  {
    [LOGIN]: (state = initialState, action) => {
      const { session, identity } = action.payload;
      return {
        loggedIn: true,
        session,
        identity
      };
    },

    [LOGOUT]: () => {
      return {
        loggedIn: false,
        session: {},
        identity: {}
      };
    },

    [POST]: (state = initialState, action) => {
      const posts = action.payload;
      return {
        ...state,
        posts
      };
    }
  },
  initialState
);
