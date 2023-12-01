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

export const validateRegisterData = (formValues) => {
    let validationErrors = {};
    const emailReggex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formValues.username === "") {
        validationErrors.username = 'Username is required';
    } else if (formValues.username.length < 3) {
        validationErrors.username = 'Username must be at least 3 characters long';
    }

    if (formValues.email === "") {
        validationErrors.email = 'Email is required';
    }

    if (!emailReggex.test(formValues.email)) {
        validationErrors.email = 'Please enter a valid email';
    }

    if (formValues.password.length < 3) {
        validationErrors.password = 'Password must be at least 3 characters long';
    }

    if (formValues.password !== formValues.repeatPassword) {
        validationErrors.repeatPassword = 'Password don`t match';
    }

    return validationErrors;
};