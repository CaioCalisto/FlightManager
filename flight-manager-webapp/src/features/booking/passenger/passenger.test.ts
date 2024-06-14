import {Passenger} from "./passenger";

export * from '@testing-library/react'

it('should map passenger with all data', () => {
    const title = 'MR';
    const gender = 'MALE';
    const firstName = 'Caio';
    const lastName = 'Calisto';
    const dateOfBirth = '1988-08-20';
    const passenger = new Passenger(title, gender, firstName, lastName, dateOfBirth)

    expect(passenger.getTitle()).toBe(title)
    expect(passenger.getGender()).toBe(gender)
    expect(passenger.getFirstName()).toBe(firstName)
    expect(passenger.getLastName()).toBe(lastName)
    expect(passenger.getDateOfBirth()).toBe(dateOfBirth)
})

it('should change firstName 1 character without error', () => {
    const passenger = new Passenger('MR', 'MALE', 'Natalis', 'Calisto', '1988-08-20')
    const newFirstName = 'Natalia';
    passenger.setFirstName(newFirstName)

    expect(passenger.getFirstName()).toBe(newFirstName)
})

it('should change firstName 2 character without error', () => {
    const passenger = new Passenger('MR', 'MALE', 'Nstalis', 'Calisto', '1988-08-20')
    const newFirstName = 'Natalia';
    passenger.setFirstName(newFirstName)

    expect(passenger.getFirstName()).toBe(newFirstName)
})

it('should change firstName 3 character without error', () => {
    const passenger = new Passenger('MR', 'MALE', 'Nstslis', 'Calisto', '1988-08-20')
    const newFirstName = 'Natalia';
    passenger.setFirstName(newFirstName)

    expect(passenger.getFirstName()).toBe(newFirstName)
})

it('should add error if firstName change more than 3 characters', () => {
    const passenger = new Passenger('MR', 'MALE', 'Nstsluq', 'Calisto', '1988-08-20')
    passenger.setFirstName('Natalia')

    expect(passenger.getErrors().length).toBe(1)
    expect(passenger.getErrors()[0]).toBe('Maximum a change of 3 digits for first name is allowed')
})

it('should change lastName 1 character without error', () => {
    const passenger = new Passenger('MR', 'MALE', 'Caio', 'Calidto', '1988-08-20')
    const newLastName = 'Calisto';
    passenger.setLastName(newLastName)

    expect(passenger.getLastName()).toBe(newLastName)
})

it('should change lastName 2 character without error', () => {
    const passenger = new Passenger('MR', 'MALE', 'Caio', 'Calidtp', '1988-08-20')
    const newLastName = 'Calisto';
    passenger.setLastName(newLastName)

    expect(passenger.getLastName()).toBe(newLastName)
})

it('should change lastName 3 character without error', () => {
    const passenger = new Passenger('MR', 'MALE', 'Caio', 'Cslidtp', '1988-08-20')
    const newLastName = 'Calisto';
    passenger.setLastName(newLastName)

    expect(passenger.getLastName()).toBe(newLastName)
})

it('should add error if lastName change more than 3 characters', () => {
    const passenger = new Passenger('MR', 'MALE', 'Caio', 'Cskidtp', '1988-08-20')
    passenger.setLastName('Calisto')

    expect(passenger.getErrors().length).toBe(1)
    expect(passenger.getErrors()[0]).toBe('Maximum a change of 3 digits for last name is allowed')
})
