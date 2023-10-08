document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('submitForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    submitForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validate the form fields
        if (name === '' || email === '') {
            alert('Please fill in all required fields.');
        } else {
            // Form submission successful
            alert('Form submitted successfully!');
            // You can also perform additional actions here, such as sending the data to a server.
            // For now, we're just showing an alert.
        }
    });
});
