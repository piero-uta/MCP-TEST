// Fake login logic
function fakeLogin(username, z  ) {
  const fakeUser = {
    username: "testUser",
    password: "password123"
  };

  if (username === fakeUser.username && password === fakeUser.password) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}