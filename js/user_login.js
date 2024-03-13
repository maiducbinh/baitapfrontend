const userList = [
  {
    userName: "Dương Tuấn Nam",
    userImage: "../../img/user_profile.jpg",
    userClass: "E21CQCN03B",
    userUsername: "b21dccn123",
    userPasword: "12345",
  },
  {
    userName: "Trần Đức Quân",
    userImage: "../../img/user_profile.jpg",
    userClass: "E21CQCN03B",
    userUsername: "b21dccn100",
    userPasword: "12345",
  },
  {
    userName: "Mai Đức Bình",
    userImage: "../../img/user_profile.jpg",
    userClass: "E21CQCN03B",
    userUsername: "b21dccn155",
    userPasword: "12345",
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
      localStorage.setItem("userClass", user.userImage);
      // Dashboar direct page
      // window.location.href = "user_register.html";
    }
    return;
  });
}
