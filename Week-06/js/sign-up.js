window.onload = function () {
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("name-error");
    var lastnameInput = document.getElementById("lastname");
    var lastnameError = document.getElementById("lastname-error");
    var id = document.getElementById("id");
    var idError = document.getElementById("id-error");
    var birthdate = document.getElementById("birthdate");
    var bdayError = document.getElementById("bday-error");
    var phoneNumber = document.getElementById("phone-number");
    var phoneError = document.getElementById("phone-error");
    var address = document.getElementById("address");
    var addressError = document.getElementById("address-error");
    var zipCode = document.getElementById("zip-code");
    var zipCodeError = document.getElementById("zipcode-error");
    var locality = document.getElementById("locality");
    var localityError = document.getElementById("locality-error");
    var email = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var password = document.getElementById("password");
    var passwordError = document.getElementById("password-error");
    var confirmPassword = document.getElementById("confirm-password");
    var confirmPasswordError = document.getElementById("confirm-password-error");

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
//name validation
    
    function validateName(a) {
        if (a.length>=3) {
            for (var index = 0; index < a.length; index++) {
                if (!hasLetters(a[index])){
                    return false;
                } 
                return true;
            }
        }
    }

    nameInput.addEventListener('blur',function(event) {
        if (!validateName(nameInput.value)) {
            nameInput.classList.add('red-border')
            nameError.classList.remove('none')
        } 
    })
    nameInput.addEventListener('focus', function () {
        nameInput.classList.remove('red-border');
        nameError.classList.add('none');
    });

//lastname validation

function validateLastname(b) {
    if (b.length>=3) {
        for (var index = 0; index < b.length; index++) {
            if (!hasLetters(b[index])){
                return false;
            } 
            return true;
        }
    }
}

lastnameInput.addEventListener('blur',function(event) {
    if (!validateLastname(lastnameInput.value)) {
        lastnameInput.classList.add('red-border')
        lastnameError.classList.remove('none')
    } 
})
lastnameInput.addEventListener('focus', function () {
    lastnameInput.classList.remove('red-border');
    lastnameError.classList.add('none');
});
   
}