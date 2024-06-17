import {Gender, Passenger, Title} from "./passenger";
import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "react-query";

interface UsePassengerDetailsResponse {
    data: Passenger[] | undefined
    changeFirstName: (passengerId: string, value: string) => void
    changeLastName: (passengerId: string, value: string) => void
    changeDateOfBirth: (passengerId: string, value: string) => void
    changeTitle: (passengerId: string, value: string) => void
    changeGender: (passengerId: string, value: string) => void
    submit: () => void
}

function fetchPassengers(): Promise<{ data: PassengerResponse[] }> {
    return axios
        .get(`http://localhost:4000/passengers`)
}

interface PassengerResponse {
    id: string;
    title: string;
    gender: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
}

export function usePassengerDetails(passengerIds: string[]): UsePassengerDetailsResponse {
    const [formData, setFormData] = useState<Passenger[] | undefined>(undefined)
    const {data: passengersData} = useQuery('passengers', fetchPassengers)

    useEffect(() => {
        if (passengersData) {
            const newData: Passenger[] = passengersData.data.map((passenger: PassengerResponse) => {
                return new Passenger(passenger.id, passenger.title as Title, passenger.gender as Gender, passenger.firstName, passenger.lastName, passenger.dateOfBirth);
            });
            setFormData(newData)
        }
    }, [passengersData]);

    function submit() {
    }

    function changeFirstName(passengerId: string, value: string) {
        setFormData(prev =>
            prev?.map(p => {
                if (p.getId() === passengerId) {
                    p.setFirstName(value);
                }
                return p;
            }) ?? []
        );
    }

    function changeLastName(passengerId: string, value: string) {
        setFormData(prev =>
            prev?.map(p => {
                if (p.getId() === passengerId) {
                    p.setLastName(value);
                }
                return p;
            }) ?? []
        );
    }

    function changeDateOfBirth(passengerId: string, value: string) {
        setFormData(prev =>
            prev?.map(p => {
                if (p.getId() === passengerId) {
                    p.setDateOfBirth(value);
                }
                return p;
            }) ?? []
        );
    }

    function changeTitle(passengerId: string, value: string) {
        setFormData(prev =>
            prev?.map(p => {
                if (p.getId() === passengerId) {
                    p.setTitle(value as Title);
                }
                return p;
            }) ?? []
        );
    }

    function changeGender(passengerId: string, value: string) {

    }

    return {data: formData, changeFirstName, changeLastName, changeDateOfBirth, changeTitle, changeGender, submit}
}