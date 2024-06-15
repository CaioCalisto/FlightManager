import useData from "../../../hooks/useData";
import {Passenger} from "./passenger";
import {useEffect, useState} from "react";

interface UsePassengerDetailsResponse {
    data: Passenger[] | undefined
    changeFirstName: (passengerId: number, value: string) => void
    changeLastName: (passengerId: number, value: string) => void
    changeDateOfBirth: (passengerId: number, value: string) => void
    changeTitle: (passengerId: number, value: string) => void
    changeGender: (passengerId: number, value: string) => void
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

    function changeFirstName(passengerId: number, value: string) {
    }

    function changeLastName(passengerId: number, value: string) {
    }

    function changeDateOfBirth(passengerId: number, value: string) {
    }

    function changeTitle(passengerId: number, value: string) {
    }

    function changeGender(passengerId: number, value: string) {
    }

    return {data, changeFirstName, changeLastName, changeDateOfBirth, changeTitle, changeGender, submit}
    //return {data: [new Passenger(1, 'MRS', 'FEMALE', 'Natalia', 'Calisto', '1989-03-20'),new Passenger(1, 'MR', 'MALE', 'Caio', 'Calisto', '1988-08-20')], changeFirstName, changeLastName, changeDateOfBirth, changeTitle, changeGender, submit}
}