import UnsupportedOperationException from "./UnsupportedOperationException.js";

export default class UserRepo {

    constructor() {
        if (new.target === UserRepo) {
            throw new TypeError("Cannot construct Abstract instances directly.")
        }
    }

    create() {
        throw new UnsupportedOperationException("You should override this method.");
    }

    read() {
        throw new UnsupportedOperationException("You should override this method.");
    }

    update() {
        throw new UnsupportedOperationException("You should override this method.");
    }

    delete() {
        throw new UnsupportedOperationException("You should override this method.");
    }

}

