document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');

    emailForm.addEventListener('submit', function (e) {
        const email = emailInput.value;

        if (!validateEmail(email)) {
            // Email format is incorrect, prevent form submission and show error message
            e.preventDefault(); // Prevent the form from submitting
            errorElement.textContent = 'Please enter a valid email address.';
        } else {
            // Email format is correct, clear any previous error message
            errorElement.textContent = '';
        }
    });

    function validateEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }
});
