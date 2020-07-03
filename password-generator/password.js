function getPassword() {
    var chars = "qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!#$%&/()=?¡><:;.''*-_@|°[]{}";
    var passwordLenght = 16;
    var password = "";
    for (let index = 0; index < passwordLenght; index++) {
        var randonNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randonNumber, randonNumber + 1);
    }
    document.getElementById('password').value = password;
}