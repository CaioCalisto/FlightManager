import useData from "../../../hooks/useData";
import {Passenger} from "./passenger";
import {useEffect, useLayoutEffect, useState} from "react";

interface UsePassengerDetailsResponse {
    data: Passenger[] | undefined
}

export function usePassengerDetails(passengerIds: string[]): UsePassengerDetailsResponse {
    const { data: passengersData } = useData<Passenger[]>(`/api/Passengers?ids=${passengerIds.join(',')}`);
    const [data, setData] = useState<Passenger[] | undefined>(undefined)

    useEffect(() => {
        setData(passengersData);
    }, [passengersData]);

    return {data}
}