function validateName() {
    const name = document.getElementById("fullName").value;
    const nameError = document.getElementById("nameError");
    if (name.length < 5) {
        nameError.textContent = "Name must be at least 5 characters long.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (!email.includes("@")) {
        emailError.textContent = "Email must contain '@'.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("fullName").value;
    const passwordError = document.getElementById("passwordError");
    if (password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase() || password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long, and should not be 'password' or user's name.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

function validateForm() {
    return validateName() && validateEmail() && validatePhone() && validatePassword() && validateConfirmPassword();
}
