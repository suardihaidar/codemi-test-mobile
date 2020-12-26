import {SET_ACTIVE_USER} from './constant';

const initialState = {
  user: [
    {email: 'user1@mail.com', username: 'John Doe'},
    {email: 'user2@mail.com', username: 'John Sina'},
  ],
  activeUser: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
