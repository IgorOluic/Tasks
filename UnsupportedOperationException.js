
export default class UnsupportedOperationException extends Error {

    constructor(message) {
        super(message);
        this.name = "UnsupportedOperationException";
    }
}