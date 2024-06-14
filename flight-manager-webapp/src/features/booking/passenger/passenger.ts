type Title = "MR" | "MRS";
type Gender = "MALE" | "FEMALE"

export class Passenger {
    private title: Title;
    private gender: Gender;
    private firstName: string;
    private lastName: string;
    private dateOfBirth: string;
    private errors: string[];

    constructor(title: Title, gender: Gender, firstName: string, lastName: string, dateOfBirth: string) {
        this.title = title;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.errors = [];
    }

    getTitle(): Title {
        return this.title
    }

    getGender(): Gender {
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

    setGender(newGender: Gender): void {
        this.gender = newGender
    }

    setTitle(newTitle: Title): void {
        this.title = newTitle
    }
}