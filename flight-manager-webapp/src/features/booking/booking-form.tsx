import {Edit} from "./passenger/edit";
import './booking-form.css'
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
    passengerIds: string[]
}

export function BookingForm({passengerIds}: Props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="formArea">
            <div className="formTitle" onClick={toggleExpand}>
                <p>Passenger details</p>
                <KeyboardArrowDownIcon/>
            </div>
            {isExpanded && (
                <div className="bookingForm">
                    <div className="formContent">
                        <Edit passengerIds={passengerIds}/>
                    </div>
                </div>
            )}
        </div>
    );
}
