import useData from "../../../hooks/useData";
import {Passenger} from "./passenger";
import {useEffect, useState} from "react";

interface UsePassengerDetailsResponse {
    data: Passenger[] | undefined
}

export function usePassengerDetails(passengerIds: string[]): UsePassengerDetailsResponse {
    const [data, setData] = useState<Passenger[] | undefined>(undefined)

    useEffect(() => {
        const { data: passengersData } = useData<Passenger[]>('/api/Passengers?ids=1,2')
        setData(passengersData)
    }, [passengerIds]);

    return {data}
}