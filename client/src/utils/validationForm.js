export const validateLoginData = (formValues) => {
    let validationErrors = {};

    if (formValues.username === "") {
        validationErrors.username = 'Username is required';
    }

    if (formValues.password.length < 3) {
        validationErrors.password = 'Password must be at least 3 characters long';
    }

    return validationErrors;
};