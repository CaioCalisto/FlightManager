import {Passenger} from "./passenger";
import {usePassengerDetails} from "./usePassengerDetails";
import {renderHook, waitFor} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "react-query";
import {act, ReactNode} from "react";
import axios from "axios";

jest.mock("axios")

const queryClient = new QueryClient();

const wrapper = ({children}: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

// TODO: I need to fix these tests, they are not 100% reliable, need to check rerender behaviours
it('should return passengers', async () => {
    const passenger1 = new Passenger("1", 'MRS', 'FEMALE', 'Natalia', 'Calisto', '1988-08-20');
    const passenger2 = new Passenger("2", 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1, passenger2];
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({status: 200, data: passengers}));

    const {result} = renderHook(() => usePassengerDetails(['1', '2']), {wrapper})

    await waitFor(() => {
        expect(result.current.data).toStrictEqual(passengers)
    })
})

it('should change passenger title', async () => {
    const passenger1 = new Passenger("1", 'MRS', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1];
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({status: 200, data: passengers}));
    const {result} = renderHook(() => usePassengerDetails(['1']), {wrapper})

    act(() => {
        result.current.changeTitle("1", 'MR')
    })

    await waitFor(() => {
        expect(result.current.data?.length).toBe(1)
        if (result.current.data) {
            expect(result.current.data[0].getTitle()).toBe('MR')
        }
    })
})

it('should change passenger gender', async () => {
    const passenger1 = new Passenger("1", 'MRS', 'FEMALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1];
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({status: 200, data: passengers}));
    const {result} = renderHook(() => usePassengerDetails(['1']), {wrapper})

    act(() => {
        result.current.changeGender("1", 'MALE')
    })

    await waitFor(() => {
        expect(result.current.data?.length).toBe(1)
        if (result.current.data) {
            expect(result.current.data[0].getGender()).toBe('MALE')
        }
    })
})

it('should change passenger name', async () => {
    const passenger1 = new Passenger("1", 'MRS', 'FEMALE', 'Csip', 'Calisto', '1988-08-20');
    const passengers = [passenger1];
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({status: 200, data: passengers}));
    const {result} = renderHook(() => usePassengerDetails(['1']), {wrapper})

    act(() => {
        result.current.changeFirstName("1", 'Caio')
    })

    await waitFor(() => {
        expect(result.current.data?.length).toBe(1)
        if (result.current.data) {
            expect(result.current.data[0].getFirstName()).toBe('Caio')
        }
    })
})

it('should change passenger last name', async () => {
    const passenger1 = new Passenger("1", 'MRS', 'FEMALE', 'Caio', 'Cslistp', '1988-08-20');
    const passengers = [passenger1];
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({status: 200, data: passengers}));
    const {result} = renderHook(() => usePassengerDetails(['1']), {wrapper})

    act(() => {
        result.current.changeLastName("1", 'Calisto')
    })

    await waitFor(() => {
        expect(result.current.data?.length).toBe(1)
        if (result.current.data) {
            expect(result.current.data[0].getLastName()).toBe('Calisto')
        }
    })
})

it('should change passenger date of birth', async () => {
    const passenger1 = new Passenger("1", 'MRS', 'FEMALE', 'Caio', 'Calisto', '1970-03-20');
    const passengers = [passenger1];
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({status: 200, data: passengers}));
    const {result} = renderHook(() => usePassengerDetails(['1']), {wrapper})

    act(() => {
        result.current.changeDateOfBirth("1", '1988-08-20')
    })

    await waitFor(() => {
        expect(result.current.data?.length).toBe(1)
        if (result.current.data) {
            expect(result.current.data[0].getDateOfBirth()).toBe('1988-08-20')
        }
    })
})
