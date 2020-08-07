import UnsupportedOperationException from "./UnsupportedOperationException.js";

export default class UserRepo {

    constructor() {
        if (new.target === UserRepo) {
            throw new TypeError("Cannot construct Abstract instances directly.");
        }
        this.errorMessage = "You should override this method.";
    }

    create() {
        throw new UnsupportedOperationException(this.errorMessage);
    }

    read() {
        throw new UnsupportedOperationException(this.errorMessage);
    }

    update() {
        throw new UnsupportedOperationException(this.errorMessage);
    }

    delete() {
        throw new UnsupportedOperationException(this.errorMessage);
    }

}

