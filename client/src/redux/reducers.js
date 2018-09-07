import compose from './compose';
import loginPanel from './reducers/loginPanel';
import speechPanel from './reducers/speechPanel';

const reducer = compose(loginPanel, speechPanel);

export default (state = {
  loginPanel: {
    loginned: false,
    login: '',
  },
  usersPanel: {
    usersList: [],
  },
  speechPanel: {
    speech: '',
    to: [],
  },
  chatPanel: {
    messages: [],
  },
}, action) => reducer(state, action);
