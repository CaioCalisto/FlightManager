import {CustomError} from "../../../commons/custom-error";

export type Title = "MR" | "MRS";
export type Gender = "MALE" | "FEMALE"
const firstNameMax3CharacterErrorCode = 1
const lastNameMax3CharacterErrorCode = 2

export class Passenger {
    private id: string;
    private title: Title;
    private gender: Gender;
    private firstName: string;
    private lastFirstName: string;
    private lastName: string;
    private lastLastName: string;
    private dateOfBirth: string;
    private errors: CustomError[];

    constructor(id: string, title: Title, gender: Gender, firstName: string, lastName: string, dateOfBirth: string) {
        this.id = id;
        this.title = title;
        this.gender = gender;
        this.firstName = firstName;
        this.lastFirstName = firstName;
        this.lastName = lastName;
        this.lastLastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.errors = [];
    }

    getId(): string {
        return this.id
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
        const errorMessages: string[] = []
        this.errors.map((error) => errorMessages.push(error.getMessage()))
        return errorMessages;
    }

    setFirstName(newFirstName: string): void {
        const minLength = Math.min(newFirstName.length, this.lastFirstName.length);
        let differenceCount = 0;

        for (let i = 0; i < minLength; i++) {
            if (newFirstName[i] !== this.lastFirstName[i]) {
                differenceCount++;
            }
        }

        if (differenceCount > 3 && this.errors.find(e => e.getCode() === firstNameMax3CharacterErrorCode) === undefined) {
            this.errors.push(new CustomError(firstNameMax3CharacterErrorCode, 'Maximum a change of 3 digits for first name is allowed'))
        } else {
            this.firstName = newFirstName;
        }
    }

    setLastName(newLastName: string): void {
        const minLength = Math.min(newLastName.length, this.lastLastName.length);
        let differenceCount = 0;

        for (let i = 0; i < minLength; i++) {
            if (newLastName[i] !== this.lastLastName[i]) {
                differenceCount++;
            }
        }

        if (differenceCount > 3 && this.errors.find(e => e.getCode()=== lastNameMax3CharacterErrorCode) === undefined) {
            this.errors.push(new CustomError(lastNameMax3CharacterErrorCode, 'Maximum a change of 3 digits for last name is allowed'))
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

    setDateOfBirth(newDate: string): void {
        this.dateOfBirth = newDate
    }
}