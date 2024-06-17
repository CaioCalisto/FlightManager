import {fireEvent, getByRole, render, screen, waitFor} from '@testing-library/react';
import UserEvent from "@testing-library/user-event";
import {Edit} from "./edit";
import {Passenger} from "./passenger";
import {usePassengerDetails} from "./usePassengerDetails";

jest.mock('./usePassengerDetails')

it('should show current passenger title', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-title-1").querySelector('input')

    expect(textField?.value).toBe("MR")
})

it('should show current passenger gender', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-gender-1").querySelector('input')

    expect(textField?.value).toBe("MALE")
})

it('should show current passenger first name', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-first-name-1").querySelector('input')

    expect(textField?.value).toBe("Caio")
})

it('should show current passenger last name', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-last-name-1").querySelector('input')

    expect(textField?.value).toBe("Calisto")
})

it('should show current passenger date of birth', () => {
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger]}))
    render(<Edit passengerIds={['1']}/>)

    const textField = screen.getByTestId("passenger-date-of-birth-1").querySelector('input')

    expect(textField?.value).toBe("1988-08-20")
})

it('should updated first name', () => {
    const changeFirstNameMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'MALE', 'Csip', 'Calisto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({
        data: [passenger],
        changeFirstName: changeFirstNameMock
    }))
    render(<Edit passengerIds={['1']}/>)

    const newName = 'Caio'
    const textBox = screen.getByTestId(`passenger-first-name-1`).querySelector('input')
    if (textBox) {
        fireEvent.change(textBox, {
            target: {value: newName},
        });
    }

    expect(changeFirstNameMock).toHaveBeenCalledWith("1", newName);
})

it('should updated last name', () => {
    const changeLastNameMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Csliwto', '1988-08-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({
        data: [passenger],
        changeLastName: changeLastNameMock
    }))
    render(<Edit passengerIds={['1']}/>)

    const newLastName = 'Calisto'
    const textBox = screen.getByTestId(`passenger-last-name-1`).querySelector('input')
    if (textBox) {
        fireEvent.change(textBox, {
            target: {value: newLastName},
        });
    }

    expect(changeLastNameMock).toHaveBeenCalledWith("1", newLastName);
})

it('should updated date of birth', () => {
    const changeDateOfBirthMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'MALE', 'Caio', 'Calisto', '1989-03-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({
        data: [passenger],
        changeDateOfBirth: changeDateOfBirthMock
    }))
    render(<Edit passengerIds={['1']}/>)

    const newDateOfBirth = '1988-08-20'
    const textBox = screen.getByTestId(`passenger-date-of-birth-1`).querySelector('input')
    if (textBox) {
        fireEvent.change(textBox, {
            target: {value: newDateOfBirth},
        });
    }

    expect(changeDateOfBirthMock).toHaveBeenCalledWith("1", newDateOfBirth);
})

it('should updated title to MR', async () => {
    const changeTitleMock = jest.fn()
    const passenger = new Passenger("1", 'MRS', 'MALE', 'Caio', 'Calisto', '1989-03-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeTitle: changeTitleMock}))
    render(<Edit passengerIds={['1']}/>)

    const newTitle = 'MR'
    UserEvent.click(getByRole(screen.getByTestId('passenger-title-1'), 'combobox'))
    await waitFor(() => UserEvent.click(screen.getByText(newTitle)));

    expect(changeTitleMock).toHaveBeenCalledWith("1", newTitle);
})

it('should updated title to MRS', async () => {
    const changeTitleMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'MALE', 'Natalia', 'Calisto', '1989-03-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeTitle: changeTitleMock}))
    render(<Edit passengerIds={['1']}/>)

    const newTitle = 'MRS'
    UserEvent.click(getByRole(screen.getByTestId('passenger-title-1'), 'combobox'))
    await waitFor(() => UserEvent.click(screen.getByText(newTitle)));

    expect(changeTitleMock).toHaveBeenCalledWith("1", newTitle);
})

it('should updated gender to Male', async () => {
    const changeGenderMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'FEMALE', 'Caio', 'Calisto', '1989-03-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeGender: changeGenderMock}))
    render(<Edit passengerIds={['1']}/>)

    const newGender = 'MALE'
    UserEvent.click(getByRole(screen.getByTestId('passenger-gender-1'), 'combobox'))
    await waitFor(() => UserEvent.click(screen.getByText(newGender)));

    expect(changeGenderMock).toHaveBeenCalledWith("1", newGender);
})

it('should updated gender to Female', async () => {
    const changeGenderMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'MALE', 'Natalia', 'Calisto', '1989-03-20');
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeGender: changeGenderMock}))
    render(<Edit passengerIds={['1']}/>)

    const newGender = 'FEMALE'
    UserEvent.click(getByRole(screen.getByTestId('passenger-gender-1'), 'combobox'))
    await waitFor(() => UserEvent.click(screen.getByText(newGender)));

    expect(changeGenderMock).toHaveBeenCalledWith("1", newGender);
})

it('should show error message', async () => {
    const changeGenderMock = jest.fn()
    const passenger = new Passenger("1", 'MR', 'MALE', 'Natalia', 'Calisto', '1989-03-20');
    const errorMessage = 'Maximum a change of 3 digits for first name is allowed'
    Object.defineProperty(passenger, 'errors', {
        value: [errorMessage],
        writable: false,
    });
    (usePassengerDetails as jest.Mock).mockImplementation(() => ({data: [passenger], changeGender: changeGenderMock}))
    render(<Edit passengerIds={['1']}/>)

    expect(screen.getByText(errorMessage)).toBeVisible()
})
