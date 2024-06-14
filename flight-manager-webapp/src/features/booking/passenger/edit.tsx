import {Passenger} from "./passenger";
import {MenuItem, Select, TextField} from "@mui/material";
import {usePassengerDetails} from "./usePassengerDetails";

type Props = {
    passengerIds: string[]
}

export const Edit = ({passengerIds}: Props) => {
    const {data} = usePassengerDetails(passengerIds)

    return (
        <>
            {data && data.map((passenger: Passenger) => (
                    <>
                        <Select
                            data-testid={`passenger-title-${passenger.getId()}`}
                            value={passenger.getTitle()}
                            label="Title"
                            onChange={() => {
                            }}
                        >
                            <MenuItem value={'MR'}>MR</MenuItem>
                            <MenuItem value={'MRS'}>MRS</MenuItem>
                        </Select>
                        <Select
                            data-testid={`passenger-gender-${passenger.getId()}`}
                            value={passenger.getGender()}
                            label="Gender"
                            onChange={() => {
                            }}
                        >
                            <MenuItem value={'MR'}>MALE</MenuItem>
                            <MenuItem value={'MRS'}>FEMALE</MenuItem>
                        </Select>
                        <TextField data-testid={`passenger-first-name-${passenger.getId()}`} label="First Name" variant="standard"
                                   value={passenger.getFirstName()}/>
                        <TextField data-testid={`passenger-last-name-${passenger.getId()}`} label="Last Name" variant="standard"
                                   value={passenger.getLastName()}/>
                        <TextField data-testid={`passenger-date-of-birth-${passenger.getId()}`} label="Date of birth" variant="standard"
                                   value={passenger.getDateOfBirth()}/>
                    </>
                )
            )}
        </>
    )
}