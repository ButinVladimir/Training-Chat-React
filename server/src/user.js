export default class User {
  constructor(socket, login) {
    this.socket = socket;
    this.login = login;
  }

  setLogin(login) {
    this.login = login;
  }
}
