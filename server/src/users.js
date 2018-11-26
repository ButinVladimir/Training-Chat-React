export default class Users {
  constructor() {
    this.userList = new Map();
  }

  exists(userLogin) {
    return this.userList.has(userLogin);
  }

  add(user) {
    if (!this.exists(user.login)) {
      this.userList.set(user.login, user);
    }
  }

  remove(userLogin) {
    if (this.exists(userLogin)) {
      this.userList.delete(userLogin);
    }
  }

  get(userLogin) {
    return this.exists(userLogin) ? this.userList.get(userLogin) : null;
  }

  getAllUserNames() {
    return Array.from(this.userList.keys());
  }
}
