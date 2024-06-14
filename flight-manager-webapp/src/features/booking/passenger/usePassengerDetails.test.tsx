import useData from "../../../hooks/useData";
import {Passenger} from "./passenger";
import {usePassengerDetails} from "./usePassengerDetails";
import {renderHook} from "@testing-library/react";

jest.mock('../../../hooks/useData')

it('should return passengers', () => {
    const passenger1 = new Passenger(1, 'MRS', 'FEMALE', 'Natalia', 'Calisto', '1988-08-20');
    const passenger2 = new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20');
    const passengers = [passenger1, passenger2];
    (useData as jest.Mock).mockImplementation(() => ({
        data: passengers
    }))
    const {result} = renderHook(() => usePassengerDetails(['1', '2']))

    expect(result.current.data).toBe(passengers)
})
