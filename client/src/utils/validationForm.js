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
    } else if (formValues.email.length < 5) {
        validationErrors.email = 'Email must be at least 5 characters long';
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

export const validateRecipieData = (formValues) => {
    let validationErrors = {};
    const httpReggex = /^https?:\/\//;


    if (formValues.title === "") {
        validationErrors.title = 'Title is required';
    }

    if (formValues.imageUrl === "") {
        validationErrors.imageUrl = 'ImageUrl is required';
    } else if (formValues.imageUrl !== "" && !httpReggex.test(formValues.imageUrl)) {
        validationErrors.imageUrl = 'Invalid URL, must start with http...';
    }

    if (formValues.description === "") {
        validationErrors.description = 'Description is required';
    }

    if (formValues.prepTime === "") {
        validationErrors.prepTime = 'PrepTime is required';
    } else if (formValues.prepTime < 1) {
        validationErrors.prepTime = "Must be possitive number";
    }

    if (formValues.cookTime === "") {
        validationErrors.cookTime = 'CookTime is required';
    } else if (formValues.cookTime < 1) {
        validationErrors.cookTime = "Must be possitive number";
    }

    if (formValues.totalTime === "") {
        validationErrors.totalTime = 'TotalTime is required';
    } else if (formValues.totalTime < 1) {
        validationErrors.totalTime = "Must be possitive number";
    }

    if (formValues.serves === "") {
        validationErrors.serves = 'Serves is required';
    } else if (formValues.serves < 1) {
        validationErrors.serves = "Must be possitive number";
    }

    if (formValues.ingredients === "") {
        validationErrors.ingredients = 'Ingredients is required';
    }

    if (formValues.directions === "") {
        validationErrors.directions = 'Directions is required';
    }

    return validationErrors;
}