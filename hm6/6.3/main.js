let welcomeUser=(users, callback) =>{
  for (let i = 0; i < users.length; i++) {
    callback(users[i]);
  }
}
let users = ["Alexandr", "Anton", "Maria"];

let hiUser = (user) => console.log(`Вітаю ${user}`);

welcomeUser(users, hiUser);