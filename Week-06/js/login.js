window.onload = function() {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById('email');
    var errorE = document.querySelector('.error');

    function validateEmail(email) {
    if (emailExpression.test(email)) {
            return true;
        }
        return false;
    }
}

emailInput.addEventListener('blur', function(event) {
        console.log('blur', event.target.value);
        if (!validateEmail(event.target.value)) {
            emailInput.classList.add('red-border');
            errorE.classList.remove('none');
        }
    });

    emailInput.addEventListener('focus', function() {
        emailInput.classList.remove('red-border');
        errorE.classList.add('none');
    });

    