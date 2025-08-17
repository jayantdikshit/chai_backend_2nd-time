class ApiError extends Error {
    constructor(
        statusCode,
        massage = "something want wrong",
        errors = [],
        statack = ""
    ) {
        super(massage)(parameter) statusCode: any
        this.statusCode = statusCode
        this.data = null
        this.massage = massage
        this.success = false;
        this.errors = errors


        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }