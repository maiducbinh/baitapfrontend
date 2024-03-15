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
    userPasword: "Duongtuann@m09",
  },
  {
    userName: "Bình Nam Quân",
    userImage: "../../img/user_profile.jpg",
    userClass: "E21CQCN03B",
    userUsername: "admin",
    userPasword: "Duongtuann@m09",
  },
];

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const usernameLoginField = document.querySelector(".username-field");
const passowrdLoginField = document.querySelector(".password-field");

const btnLogin = document.getElementById("btn-login");

function checkLogin() {
  const username = usernameLoginField.value;
  const password = passowrdLoginField.value;
  var check = 0;
  var idx = -1;
  var message;

  userList.forEach((user, index) => {
    if (user.userUsername === username) {
      check = 1;
      idx = index;
    }
  });
  if (check == 1) {
    check = 0;
    if (passwordRegex.test(password)) {
      check = 1;
    } else {
      message =
        "Mật khẩu phải bao gồm ít nhất một chữ cái in hoa, ký tự đặc biệt, và một số";
      alert(message);
    }
  } else {
    message = "Tên đăng nhập không tồn tại";
    alert(message);
  }
  if (check == 1) {
    const user = userList[idx];
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("userPassowrd", user.userPasword);
    localStorage.setItem("userImage", user.userImage);
    localStorage.setItem("userClass", user.userImage);
    window.location.href = "page/user/user_home.html";
  } else {
    message = "Mật khẩu không đúng";
    alert(message);
  }
}

// function checkLogin() {
//   userList.forEach((user) => {
//     if (true) {
//       localStorage.setItem("userName", user.userName);
//       localStorage.setItem("userPassowrd", user.userPasword);
//       localStorage.setItem("userImage", user.userImage);
//       localStorage.setItem("userClass", user.userImage);
//       // Dashboar direct page
//       window.location.href = "page/user/user_home.html";
//     }
//     return;
//   });
// }
