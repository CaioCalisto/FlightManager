import {Passenger} from "./passenger";
import {Button, MenuItem, Select, TextField} from "@mui/material";
import {usePassengerDetails} from "./usePassengerDetails";
import './edit.css'

type Props = {
    passengerIds: string[]
}

export const Edit = ({passengerIds}: Props) => {
    const {
        data,
        changeFirstName,
        changeLastName,
        changeDateOfBirth,
        changeTitle,
        changeGender
    } = usePassengerDetails(passengerIds)

    return (
        <>
            {data?.map((passenger: Passenger) => (
                    <form key={`booking-passenger-edit-${passenger.getId()}`} onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <Select
                            data-testid={`passenger-title-${passenger.getId()}`}
                            value={passenger.getTitle()}
                            name={'title'}
                            label="Title"
                            onChange={(e) => {
                                changeTitle(passenger.getId(), e.target.value)
                            }}
                        >
                            <MenuItem value={'MR'}>MR</MenuItem>
                            <MenuItem value={'MRS'}>MRS</MenuItem>
                        </Select>
                        <TextField data-testid={`passenger-first-name-${passenger.getId()}`} label="First Name"
                                   name="firstName"
                                   variant="standard"
                                   value={passenger.getFirstName()}
                                   onChange={(e) => {
                                       changeFirstName(passenger.getId(), e.target.value)
                                   }}/>
                        <TextField data-testid={`passenger-last-name-${passenger.getId()}`} label="Last Name"
                                   name="lastName"
                                   variant="standard"
                                   value={passenger.getLastName()}
                                   onChange={(e) => {
                                       changeLastName(passenger.getId(), e.target.value)
                                   }}/>
                        <Select
                            data-testid={`passenger-gender-${passenger.getId()}`}
                            value={passenger.getGender()}
                            label="Gender"
                            name="gender"
                            onChange={(e) => {
                                changeGender(passenger.getId(), e.target.value)
                            }}
                        >
                            <MenuItem value={'MALE'}>MALE</MenuItem>
                            <MenuItem value={'FEMALE'}>FEMALE</MenuItem>
                        </Select>
                        <TextField data-testid={`passenger-date-of-birth-${passenger.getId()}`} label="Date of birth"
                                   name="dateOfBirth"
                                   variant="standard"
                                   value={passenger.getDateOfBirth()}
                                   onChange={(e) => {
                                       changeDateOfBirth(passenger.getId(), e.target.value)
                                   }}/>
                        <Button type={'submit'}>Submit</Button>
                    </form>
                )
            )}
        </>
    )
}