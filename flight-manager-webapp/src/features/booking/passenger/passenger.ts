export class Passenger {
    private title: string;
    private gender: string;
    private firstName: string;
    private lastName: string;
    private dateOfBirth: string;
    private errors: string[];

    constructor(title: string, gender: string, firstName: string, lastName: string, dateOfBirth: string) {
        this.title = title;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.errors = [];
    }

    getTitle(): string {
        return this.title
    }

    getGender(): string {
        return this.gender;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getDateOfBirth(): string {
        return this.dateOfBirth;
    }

    getErrors(): string[] {
        return this.errors;
    }

    setFirstName(newFirstName: string): void {
        const minLength = Math.min(newFirstName.length, this.firstName.length);
        let differenceCount = 0;

        for (let i = 0; i < minLength; i++) {
            if (newFirstName[i] !== this.firstName[i]) {
                differenceCount++;
            }
        }

        if (differenceCount > 3) {
            this.errors.push('Maximum a change of 3 digits for first name is allowed')
        } else {
            this.firstName = newFirstName;
        }
    }

    setLastName(newLastName: string): void {
        const minLength = Math.min(newLastName.length, this.lastName.length);
        let differenceCount = 0;

        for (let i = 0; i < minLength; i++) {
            if (newLastName[i] !== this.lastName[i]) {
                differenceCount++;
            }
        }

        if (differenceCount > 3) {
            this.errors.push('Maximum a change of 3 digits for last name is allowed')
        } else {
            this.lastName = newLastName
        }
    }
}