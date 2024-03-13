// Thêm mã JavaScript để kiểm tra nhập lại mật khẩu khi người dùng nhập xong
const usernameInput = document.getElementById('inputUsername');
const passwordInput = document.getElementById('inputPassword');
const retypePasswordInput = document.getElementById('inputPasswordRetype');
const retypePasswordError = document.getElementById('retypePasswordError');

retypePasswordInput.addEventListener('blur', function () {
    // blur: sự kiện xảy ra khi phần tử mất focus
    // Kiểm tra xem nhập lại mật khẩu có khớp với mật khẩu ban đầu không
    if (retypePasswordInput.value !== passwordInput.value) {
        retypePasswordError.textContent = 'Xác nhận mật khẩu không thành công, mời nhập lại!';
    } else {
        retypePasswordError.textContent = '';
    }
});


