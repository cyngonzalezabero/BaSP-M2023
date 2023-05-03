window.onload = function () {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  var lastnameInput = document.getElementById("lastname");
  var lastnameError = document.getElementById("lastname-error");
  var id = document.getElementById("id");
  var idError = document.getElementById("id-error");
  var birthday = document.getElementById("birthdate");
  var bdayError = document.getElementById("bday-error");
  var phoneNumber = document.getElementById("phone-number");
  var phoneError = document.getElementById("phone-error");
  var address = document.getElementById("address");
  var addressError = document.getElementById("address-error");
  var zipCode = document.getElementById("zip-code");
  var zipCodeError = document.getElementById("zipcode-error");
  var locality = document.getElementById("locality");
  var localityError = document.getElementById("locality-error");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var email = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var password = document.getElementById("password");
  var passwordError = document.getElementById("password-error");
  var confirmPassword = document.getElementById("confirm-password");
  var confirmPasswordError = document.getElementById("confirm-password-error");

  function hasLetters(str) {
    var letter = "abcdefghijklmnñopqrstuvwxyz";
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
    var number = "0123456789";
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < number.length; j++) {
        if (str[i] == number[j]) {
          return true;
        }
      }
    }
    return false;
  }

  function hasSpace(str) {
    if (str == " ") {
      return true;
    }
    return false;
  }

  //name validation

  function validateName(a) {
    if (a.length >= 3) {
      for (var index = 0; index < a.length; index++) {
        if (!hasLetters(a[index])) {
          return false;
        }
        return true;
      }
    }
  }

  nameInput.addEventListener("blur", function (event) {
    if (!validateName(nameInput.value)) {
      nameInput.classList.add("red-border");
      nameError.classList.remove("none");
    }
  });
  nameInput.addEventListener("focus", function () {
    nameInput.classList.remove("red-border");
    nameError.classList.add("none");
  });

  //lastname validation

  function validateLastname(b) {
    if (b.length >= 3) {
      for (var index = 0; index < b.length; index++) {
        if (!hasLetters(b[index])) {
          return false;
        }
        return true;
      }
    }
  }

  lastnameInput.addEventListener("blur", function (event) {
    if (!validateLastname(lastnameInput.value)) {
      lastnameInput.classList.add("red-border");
      lastnameError.classList.remove("none");
    }
  });
  lastnameInput.addEventListener("focus", function () {
    lastnameInput.classList.remove("red-border");
    lastnameError.classList.add("none");
  });

  //id validation

  function validateId(c) {
    if (c.length >= 8 && hasNumbers(c)) {
      return true;
    } else {
      return false;
    }
  }

  id.addEventListener("blur", function (event) {
    if (!validateId(id.value)) {
      id.classList.add("red-border");
      idError.classList.remove("none");
    }
  });
  id.addEventListener("focus", function () {
    id.classList.remove("red-border");
    idError.classList.add("none");
  });

  //birthday validation

   function validateBirthday(d) {
     var birthDate = new Date(d);
     var currentDate = new Date();
     if (birthDate.getTime() <= currentDate.getTime()) {
       return true;
     }
     return false;
   }

   birthday.addEventListener("blur", function (event) {
     if (!validateBirthday(event.target.value)) {
       birthday.classList.add("red-border");
       bdayError.classList.remove("none");
     }
   });

   birthday.addEventListener("focus", function () {
     birthday.classList.remove("red-border");
     bdayError.classList.add("none");
   });

  //phone validation

  function validatePhone(e) {
    if (e.length >= 10 && hasNumbers(e)) {
      return true;
    } else {
      return false;
    }
  }

  phoneNumber.addEventListener("blur", function (event) {
    if (!validatePhone(phoneNumber.value)) {
      phoneNumber.classList.add("red-border");
      phoneError.classList.remove("none");
    }
  });
  phoneNumber.addEventListener("focus", function () {
    phoneNumber.classList.remove("red-border");
    phoneError.classList.add("none");
  });

  //address validation

  function validateAddress(f) {
    var num = 0;
    var char = 0;
    var space = 0;
    if (f.length >= 5) {
      for (let i = 0; i < f.length; i++) {
        if (hasLetters(f[i])) {
          num++;
        }
        if (hasNumbers(f[i])) {
          char++;
        }
        if (hasSpace(f[i])) {
          space++;
        }
      }
      if (num > 0 && char > 0 && space > 0) {
        return true;
      }
      return false;
    }
  }

  address.addEventListener("blur", function (event) {
    if (!validateAddress(event.target.value)) {
      address.classList.add("red-border");
      addressError.classList.remove("none");
    }
  });

  address.addEventListener("focus", function () {
    address.classList.remove("red-border");
    addressError.classList.add("none");
  });

  //zipcode validation

  function validateZipcode(g) {
    if (g.length >= 4 && g.length <= 5 && hasNumbers(g)) {
      return true;
    } else {
      return false;
    }
  }
  zipCode.addEventListener("blur", function (event) {
    if (!validateZipcode(event.target.value)) {
      zipCode.classList.add("red-border");
      zipCodeError.classList.remove("none");
    }
  });

  zipCode.addEventListener("focus", function () {
    zipCode.classList.remove("red-border");
    zipCodeError.classList.add("none");
  });

  //locality validation

  function validateLocality(h) {
    if (h.length >= 4 && hasLetters(h)) {
      return true;
    } else {
      return false;
    }
  }
  locality.addEventListener("blur", function (event) {
    if (!validateLocality(event.target.value)) {
      locality.classList.add("red-border");
      localityError.classList.remove("none");
    }
  });

  locality.addEventListener("focus", function () {
    locality.classList.remove("red-border");
    localityError.classList.add("none");
  });

  //email validatation

  function validateEmail(email) {
    if (emailExpression.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  email.addEventListener("blur", function (event) {
    if (!validateEmail(event.target.value)) {
      email.classList.add("red-border");
      emailError.classList.remove("none");
    }
  });

  email.addEventListener("focus", function () {
    email.classList.remove("red-border");
    emailError.classList.add("none");
  });

  //password validation

  function validatePassword(password) {
    if (hasNumbers(password) && hasLetters(password) && password.length >= 8) {
      return true;
    } else {
      return false;
    }
  }

  password.addEventListener("blur", function (event) {
    if (!validatePassword(event.target.value)) {
      password.classList.add("red-border");
      passwordError.classList.remove("none");
    }
  });

  password.addEventListener("focus", function () {
    password.classList.remove("red-border");
    passwordError.classList.add("none");
  });

  //repeat password validation

  confirmPassword.addEventListener("blur", function (event) {
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add("red-border");
      confirmPasswordError.classList.remove("none");
    }
  });

  confirmPassword.addEventListener("focus", function () {
    confirmPassword.classList.remove("red-border");
    confirmPasswordError.classList.add("none");
  });
};
