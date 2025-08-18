class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); // Call the parent Error class with message

        this.statusCode = statusCode; // HTTP status code (e.g., 400, 404, 500)
        this.data = null; // Can hold extra response data if needed
        this.message = message; // Human-readable error message
        this.success = false; // Always false for errors
        this.errors = errors; // Array of extra error details

        if (stack) {
            this.stack = stack; // Use provided stack if any
        } else {
            Error.captureStackTrace(this, this.constructor);
            // Generates the proper stack trace
        }
    }
}

export { ApiError };