import compose from './compose';
import loginPanel from './reducers/loginPanel';
import speechPanel from './reducers/speechPanel';
import usersPanel from './reducers/usersPanel';
import chatPanel from './reducers/chatPanel';
import connected from './reducers/connected';
import errorPanel from './reducers/errorPanel';
import getDefaultState from './getDefaultState';

const reducers = compose(loginPanel, speechPanel, usersPanel, chatPanel, connected, errorPanel);

export default (state = getDefaultState(), action) => reducers(state, action);
