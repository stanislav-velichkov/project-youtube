function User(username = '', email = '', password = '') {
    this.username = username;
    this.email = email;
    this.password = password;
    this.likes = [];
    this.watchLater = [];
}