
export default class ValidationError extends Error {

    constructor(message, cause) {
        super(message);
        this.name = "ValidationError";
        this.cause = cause;
    }
}

