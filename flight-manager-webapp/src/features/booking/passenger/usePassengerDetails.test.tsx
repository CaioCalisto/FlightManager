import useData from "../../../hooks/useData";
import {Passenger} from "./passenger";
import {usePassengerDetails} from "./usePassengerDetails";
import {renderHook} from "@testing-library/react";

jest.mock('../../../hooks/useData')

it('should return passengers', () => {
    const passenger1 = new Passenger(1, 'MRS', 'FEMALE', 'Natalia', 'Calisto', '1988-08-20');
    const passenger2 = new Passenger(2, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1, passenger2];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))
    const {result: {current: {data}}} = renderHook(() => usePassengerDetails(['1', '2']))

    expect(data).toBe(passengers)
})

it('should change passenger title', () => {
    const passenger1 = new Passenger(1, 'MRS', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))

    const {result: {current: {changeTitle, data}}} = renderHook(() => usePassengerDetails(['1']))

    changeTitle(1, 'MR')

    expect(data?.length).toBe(1)
    if (data) {
        expect(data[0].getTitle()).toBe('MR')
    }
})

it('should change passenger gender', () => {
    const passenger1 = new Passenger(1, 'MRS', 'FEMALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))

    const {result: {current: {changeGender, data}}} = renderHook(() => usePassengerDetails(['1']))

    changeGender(1, 'MALE')

    expect(data?.length).toBe(1)
    if (data) {
        expect(data[0].getGender()).toBe('MALE')
    }
})

it('should change passenger name', () => {
    const passenger1 = new Passenger(1, 'MRS', 'FEMALE', 'Csip', 'Calisto', '1988-08-20');
    const passengers = [passenger1];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))

    const {result: {current: {changeFirstName, data}}} = renderHook(() => usePassengerDetails(['1']))

    changeFirstName(1, 'Caio')

    expect(data?.length).toBe(1)
    if (data) {
        expect(data[0].getFirstName()).toBe('Caio')
    }
})

it('should change passenger last name', () => {
    const passenger1 = new Passenger(1, 'MRS', 'FEMALE', 'Caio', 'Cslistp', '1988-08-20');
    const passengers = [passenger1];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))

    const {result: {current: {changeLastName, data}}} = renderHook(() => usePassengerDetails(['1']))

    changeLastName(1, 'Calisto')

    expect(data?.length).toBe(1)
    if (data) {
        expect(data[0].getLastName()).toBe('Calisto')
    }
})

it('should change passenger date of birth', () => {
    const passenger1 = new Passenger(1, 'MRS', 'FEMALE', 'Caio', 'Calisto', '1970-03-20');
    const passengers = [passenger1];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))

    const {result: {current: {changeDateOfBirth, data}}} = renderHook(() => usePassengerDetails(['1']))

    changeDateOfBirth(1, '1988-08-20')

    expect(data?.length).toBe(1)
    if (data) {
        expect(data[0].getDateOfBirth()).toBe('1988-08-20')
    }
})
