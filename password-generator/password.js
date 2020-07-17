var alert = document.querySelector('.alertBox');

function getPassword() {

    var chars = "qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!#$%&/()=?¡><:;.''*-_@|°[]{}";
    var passwordLenght = 16;
    var password = "";
    for (let index = 0; index < passwordLenght; index++) {
        var randonNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randonNumber, randonNumber + 1);
    }
    document.getElementById('password').value = password;
    alert.innerHTML = 'New Password copied: <br>' + password;
}

function copyPassword() {
    var copyPassText = document.getElementById('password');
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand('copy');
    alert.classList.toggle('active');
    setTimeout(function () {
        alert.classList.toggle('active');
    }, 900);
}