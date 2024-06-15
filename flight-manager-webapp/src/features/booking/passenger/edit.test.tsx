import {fireEvent, render, screen} from '@testing-library/react';
import {Edit} from "./edit";
import {Passenger} from "./passenger";
import {usePassengerDetails} from "./usePassengerDetails";

jest.mock('./usePassengerDetails')

it('should show current passenger title', () => {
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-title-1").querySelector('input')

    expect(textField?.value).toBe("MR")
})

it('should show current passenger gender', () => {
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-gender-1").querySelector('input')

    expect(textField?.value).toBe("MALE")
})

it('should show current passenger first name', () => {
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-first-name-1").querySelector('input')

    expect(textField?.value).toBe("Caio")
})

it('should show current passenger last name', () => {
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-last-name-1").querySelector('input')

    expect(textField?.value).toBe("Calisto")
})

it('should show current passenger date of birth', () => {
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-date-of-birth-1").querySelector('input')

    expect(textField?.value).toBe("1988-08-20")
})

it('should updated first name', () => {
    const changeFirstNameMock = jest.fn()
    const passenger = new Passenger(1, 'MR', 'MALE', 'Csip', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeFirstName: changeFirstNameMock}))
    render(<Edit passengerIds={['1']}/>)

    const newName = 'Caio'
    const textBox = screen.getByTestId(`passenger-first-name-1`).querySelector('input')
    if (textBox) {
        fireEvent.change(textBox, {
            target: {value: newName},
        });
    }
    fireEvent.click(screen.getByText('Submit'));

    expect(changeFirstNameMock).toHaveBeenCalledWith(1, newName);
})

it('should updated last name', () => {
    const changeLastNameMock = jest.fn()
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Csliwto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeLastName: changeLastNameMock}))
    render(<Edit passengerIds={['1']}/>)

    const newLastName = 'Calisto'
    const textBox = screen.getByTestId(`passenger-last-name-1`).querySelector('input')
    if (textBox) {
        fireEvent.change(textBox, {
            target: {value: newLastName},
        });
    }
    fireEvent.click(screen.getByText('Submit'));

    expect(changeLastNameMock).toHaveBeenCalledWith(1, newLastName);
})

it('should updated date of birth', () => {
    const changeDateOfBirthMock = jest.fn()
    const passenger = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1989-03-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeDateOfBirth: changeDateOfBirthMock}))
    render(<Edit passengerIds={['1']}/>)

    const newDateOfBirth = '1988-08-20'
    const textBox = screen.getByTestId(`passenger-date-of-birth-1`).querySelector('input')
    if (textBox) {
        fireEvent.change(textBox, {
            target: {value: newDateOfBirth},
        });
    }
    fireEvent.click(screen.getByText('Submit'));

    expect(changeDateOfBirthMock).toHaveBeenCalledWith(1, newDateOfBirth);
})
