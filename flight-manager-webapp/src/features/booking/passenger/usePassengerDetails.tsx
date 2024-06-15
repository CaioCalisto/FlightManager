import useData from "../../../hooks/useData";
import {Passenger} from "./passenger";
import {useEffect, useState} from "react";

interface UsePassengerDetailsResponse {
    data: Passenger[] | undefined
    changeFirstName: (id: number, value: string) => void
    changeLastName: (id: number, value: string) => void
    changeDateOfBirth: (id: number, value: string) => void
    changeTitle: (id: number, value: string) => void
    changeGender: (id: number, value: string) => void
    submit: () => void
}

export function usePassengerDetails(passengerIds: string[]): UsePassengerDetailsResponse {
    const {data: passengersData} = useData<Passenger[]>(`/api/Passengers?ids=${passengerIds.join(',')}`);
    const [data, setData] = useState<Passenger[] | undefined>(undefined)

    useEffect(() => {
        setData(passengersData);
    }, [passengersData]);

    function submit() {
    }

    function changeFirstName(id: number, value: string) {
    }

    function changeLastName(id: number, value: string) {
    }

    function changeDateOfBirth(id: number, value: string) {
    }

    function changeTitle(id: number, value: string) {
    }

    function changeGender(id: number, value: string) {
    }

    return {data, changeFirstName, changeLastName, changeDateOfBirth, changeTitle, changeGender, submit}
}