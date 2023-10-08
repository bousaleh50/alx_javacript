document.addEventListener('DOMContentLoaded', function () {
    const dynamicForm = document.getElementById('dynamicForm');
    const numFieldsSelect = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');

    // Add event listener to detect changes in the dropdown menu
    numFieldsSelect.addEventListener('change', function () {
        const numFields = parseInt(numFieldsSelect.value);
        generateInputFields(numFields);
    });

    // Function to generate dynamic input fields
    function generateInputFields(numFields) {
        inputContainer.innerHTML = ''; // Clear previous fields

        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'field' + i;
            input.placeholder = 'Field ' + i;
            inputContainer.appendChild(input);
        }
    }

    // Add event listener to the form for submission
    dynamicForm.addEventListener('submit', function (e) {
        if (!validateForm()) {
            e.preventDefault(); // Prevent form submission if validation fails
            alert('Please fill in all fields.');
        }
    });

    // Function to validate the form
    function validateForm() {
        const inputs = inputContainer.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(function (input) {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });

        return isValid;
    }
});
