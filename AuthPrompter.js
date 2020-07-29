
class AuthPrompter {

    constructor() {
        this.authValidator = new AuthValidator();
    }

    hasAccount() {
        return confirm("Do you already have an account?");
    }

    enterEmail() {
        let email = prompt("Enter your email:");
        return this.authValidator.validateEmail(email);
    }

    enterPassword() {
        let password = prompt("Enter your password:");
        return this.authValidator.validatePassword(password);
    }

    enterFirstName() {
        let firstName = prompt("Enter your first name:");
        return this.authValidator.validateFirstName(firstName);
    }
}
