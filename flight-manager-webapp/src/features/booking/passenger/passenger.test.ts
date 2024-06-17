import {Passenger} from "./passenger";

it('should map passenger with all data', () => {
    const id = "1";
    const title = 'MR';
    const gender = 'MALE';
    const firstName = 'Caio';
    const lastName = 'Calisto';
    const dateOfBirth = '1988-08-20';
    const passenger = new Passenger(id, title, gender, firstName, lastName, dateOfBirth)

    expect(passenger.getId()).toBe(id)
    expect(passenger.getTitle()).toBe(title)
    expect(passenger.getGender()).toBe(gender)
    expect(passenger.getFirstName()).toBe(firstName)
    expect(passenger.getLastName()).toBe(lastName)
    expect(passenger.getDateOfBirth()).toBe(dateOfBirth)
})

it('should change firstName 1 character without error', () => {
    const passenger = new Passenger("1", 'MRS', 'MALE', 'Natalis', 'Calisto', '1988-08-20')
    const newFirstName = 'Natalia';
    passenger.setFirstName(newFirstName)

    expect(passenger.getFirstName()).toBe(newFirstName)
})

it('should change firstName 2 character without error', () => {
    const passenger = new Passenger("1", 'MRS', 'MALE', 'Nstalis', 'Calisto', '1988-08-20')
    const newFirstName = 'Natalia';
    passenger.setFirstName(newFirstName)

    expect(passenger.getFirstName()).toBe(newFirstName)
})

it('should change firstName 3 character without error', () => {
    const passenger = new Passenger("1", 'MRS', 'MALE', 'Nstslis', 'Calisto', '1988-08-20')
    const newFirstName = 'Natalia';
    passenger.setFirstName(newFirstName)

    expect(passenger.getFirstName()).toBe(newFirstName)
})

it('should add error if firstName change more than 3 characters', () => {
    const passenger = new Passenger("1", 'MRS', 'MALE', 'Nstsluq', 'Calisto', '1988-08-20')
    passenger.setFirstName('Natalia')

    expect(passenger.getErrors().length).toBe(1)
    expect(passenger.getErrors()[0]).toBe('Maximum a change of 3 digits for first name is allowed')
})

it('should change lastName 1 character without error', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calidto', '1988-08-20')
    const newLastName = 'Calisto';
    passenger.setLastName(newLastName)

    expect(passenger.getLastName()).toBe(newLastName)
})

it('should change lastName 2 character without error', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calidtp', '1988-08-20')
    const newLastName = 'Calisto';
    passenger.setLastName(newLastName)

    expect(passenger.getLastName()).toBe(newLastName)
})

it('should change lastName 3 character without error', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Cslidtp', '1988-08-20')
    const newLastName = 'Calisto';
    passenger.setLastName(newLastName)

    expect(passenger.getLastName()).toBe(newLastName)
})

it('should add error if lastName change more than 3 characters', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Cskidtp', '1988-08-20')
    passenger.setLastName('Calisto')

    expect(passenger.getErrors().length).toBe(1)
    expect(passenger.getErrors()[0]).toBe('Maximum a change of 3 digits for last name is allowed')
})

it('should change gender', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Anyone', 'Else', '1988-08-20')
    const newGender = 'FEMALE'
    passenger.setGender(newGender)

    expect(passenger.getGender()).toBe(newGender)
})

it('should change title', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Anyone', 'Else', '1988-08-20')
    const newTitle = 'MRS'
    passenger.setTitle(newTitle)

    expect(passenger.getTitle()).toBe(newTitle)
})

it('should change title', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Anyone', 'Else', '1970-08-20')
    const newDate = '1970-08-20'
    passenger.setDateOfBirth(newDate)

    expect(passenger.getDateOfBirth()).toBe(newDate)
})

it('should add error if first name change more than 3 characters after multiple updates', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Nstslks', 'Calisto', '1988-08-20')
    passenger.setFirstName('Natslks')
    passenger.setFirstName('Natalks')
    passenger.setFirstName('Natalis')
    passenger.setFirstName('Natalia')

    expect(passenger.getErrors().length).toBe(1)
    expect(passenger.getErrors()[0]).toBe('Maximum a change of 3 digits for first name is allowed')
})

it('should add error if last name change more than 3 characters after multiple updates', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Cslodgp', '1988-08-20')
    passenger.setLastName('Cslodgp')
    passenger.setLastName('Calodgp')
    passenger.setLastName('Calidgp')
    passenger.setLastName('Calisgp')
    passenger.setLastName('Calistp')

    expect(passenger.getErrors().length).toBe(1)
    expect(passenger.getErrors()[0]).toBe('Maximum a change of 3 digits for last name is allowed')
})
