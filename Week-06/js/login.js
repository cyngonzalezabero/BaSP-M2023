window.onload = function () {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('password-error');

    function validateEmail(email) {
        if (emailExpression.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    emailInput.addEventListener("blur", function (event) {
        if (!validateEmail(event.target.value)) {
            emailInput.classList.add("red-border");
            emailError.classList.remove("none");
        }
    });

    emailInput.addEventListener("focus", function () {
        emailInput.classList.remove("red-border");
        emailError.classList.add("none");
    });

    function hasNumbers(str) {
        var number = '0123456789'
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < number.length; j++) {
                if (str[i] == number[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    function hasLetters(str) {
        var letter = 'abcdefghijklmnñopqrstuvwxyz'
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < letter.length; j++) {
                if (str[i] == letter[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    function hasSpecialCharacters(str) {
        var specialCharacters = '!@#$%^&*()`~'
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < specialCharacters.length; j++) {
                if (str[i] == specialCharacters[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    function validatePassword(password) {
        if (hasNumbers(password) && hasLetters(password) && hasSpecialCharacters(password)
            && password.length >= 8) {
            return true;
        } else {
            return false;
        }
    }

    passwordInput.addEventListener("blur", function (event) {
        if (!validatePassword(event.target.value)) {
            passwordInput.classList.add("red-border");
            passwordError.classList.remove("none");
        }
    });

    passwordInput.addEventListener("focus", function () {
        passwordInput.classList.remove("red-border");
        passwordError.classList.add("none");
    });

    var formInput = document.getElementById('form');

    formInput.addEventListener('submit', function validateForm (e) {
        e.preventDefault();
        if (emailInput.classList.contains('red-border') || passwordInput.classList.contains('red-border')) {
            alert('Some input contains error');
        } else if (emailInput.value == '' || passwordInput.value == '') {
            alert('An input is empty');
        } else {
            alert('Your email is: ' + emailInput.value + '\nYour password is: ' + passwordInput.value); 
        } 
    });
}