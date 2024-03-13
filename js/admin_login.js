const userList = [
  {
    userName: "Bình Nam Quân",
    userImage: "../../img/user_profile.jpg",
    userUsername: "admin",
    userPasword: "admin",
  },
];

const usernameLoginField = document.querySelector(".username-field");
const passowrdLoginField = document.querySelector(".password-field");

const btnLogin = document.getElementById("btn-login");

function checkLogin() {
  userList.forEach((user) => {
    if (
      user.userUsername.matchAll(usernameLoginField.value) &&
      user.userPasword.matchAll(passowrdLoginField.value)
    ) {
      localStorage.setItem("userName", user.userName);
      localStorage.setItem("userPassowrd", user.userPasword);
      localStorage.setItem("userImage", user.userImage);
      // Dashboar direct page
      // window.location.href = "user_register.html";
    }
    return;
  });
}
