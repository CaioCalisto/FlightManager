import useData from "../../../hooks/useData";
import {Gender, Passenger, Title} from "./passenger";
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
    const [data, setData] = useState<Passenger[] | undefined>(undefined)

    function useFetchData() {
        const {data: passengersData} = useData<Passenger[]>(`/api/Passengers?ids=${passengerIds.join(',')}`);
        setData(passengersData);
    }

    useEffect(() => {
        useFetchData()
    }, [passengerIds]);

    function submit() {
    }

    function changeFirstName(passengerId: number, value: string) {
        const currentPassenger = data?.find(p => p.getId() === passengerId)
        currentPassenger?.setFirstName(value)
        setData(prev => {
            if (!prev) return prev
            prev?.map(p => {
                if (p.getId() === passengerId) return currentPassenger
                return p
            })
        })
    }

    function changeLastName(passengerId: number, value: string) {
        const currentPassenger = data?.find(p => p.getId() === passengerId)
        currentPassenger?.setLastName(value)
        setData(prev => {
            if (!prev) return prev
            prev?.map(p => {
                if (p.getId() === passengerId) return currentPassenger
                return p
            })
        })
    }

    function changeDateOfBirth(passengerId: number, value: string) {
        const currentPassenger = data?.find(p => p.getId() === passengerId)
        currentPassenger?.setDateOfBirth(value)
        setData(prev => {
            if (!prev) return prev
            prev?.map(p => {
                if (p.getId() === passengerId) return currentPassenger
                return p
            })
        })
    }

    function changeTitle(passengerId: number, value: string) {
        const currentPassenger = data?.find(p => p.getId() === passengerId)
        currentPassenger?.setTitle(value as Title)
        setData(prev => {
            if (!prev) return prev
            prev?.map(p => {
                if (p.getId() === passengerId) return currentPassenger
                return p
            })
        })
    }

    function changeGender(passengerId: number, value: string) {
        const currentPassenger = data?.find(p => p.getId() === passengerId)
        currentPassenger?.setGender(value as Gender)
        setData(prev => {
            if (!prev) return prev
            prev?.map(p => {
                if (p.getId() === passengerId) return currentPassenger
                return p
            })
        })
    }

    return {data, changeFirstName, changeLastName, changeDateOfBirth, changeTitle, changeGender, submit}
}