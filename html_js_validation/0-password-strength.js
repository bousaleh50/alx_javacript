document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error');

    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting initially

        const password = passwordInput.value;
        const isValid = validatePassword(password);

        if (isValid) {
            // Password is valid, allow form submission
            errorElement.textContent = '';
            passwordForm.submit();
        } else {
            // Password is invalid, display error message
            errorElement.textContent = 'Password does not meet the criteria.';
        }
    });

    function validatePassword(password) {
        // Password criteria
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        // Check each criteria
        const isMinLength = password.length >= minLength;
        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasDigit = digitRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);

        // All criteria must be met
        return isMinLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
    }
});
