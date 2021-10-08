function check_tai_khoan() {
    let userName = document.getElementById('user').value;
    let passWord = document.getElementById('pass').value;
    if (userName === 'Admin') {
        if (passWord === 'TheMaster') {
            document.getElementById('result').innerHTML = 'Welcome'
        } else if (passWord === null) {
            document.getElementById('result').innerHTML = 'Canceled'
        } else {
            document.getElementById('result').innerHTML = 'Wrong password'
        }
    } else if (userName === null) {
        document.getElementById('result').innerHTML = 'canceld'
    } else {
        document.getElementById('result').innerHTML = 'I don’t know you'
    }
}