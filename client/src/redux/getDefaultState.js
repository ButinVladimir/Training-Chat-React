export default () => ({
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
  connected: false,
  errorPanel: {
    showError: false,
    error: '',
  },
});
