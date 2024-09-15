const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// I have written myself!
// Simple- LinearSearch 
function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  for (
    const currentIndex = 0;
    currentIndex < ALL_USERS.length;
    currentIndex++
  ) {
    const userName = ALL_USERS[currentIndex].username;
    const passwordData = ALL_USERS[currentIndex].password;
    if (userName == username && password == passwordData) {
      return true;
    }
  }
  return false;
}


function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    let userExitOrNot = false;
    for(let i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password){
            userExitOrNot = true;
            break;
        }
    }
    return userExitOrNot;
  }

userExists("Priya Kumari", "19191"); // false
userExists("Priya Kumari", "123321"); // true