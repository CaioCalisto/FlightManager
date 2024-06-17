export class CustomError {
    private readonly code: number;
    private readonly message: string;

    constructor(code: number, message: string) {
        this.code = code;
        this.message = message
    }

    getCode(): number {
        return this.code;
    }

    getMessage(): string {
        return this.message;
    }
}