import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {BookingForm} from "./features/booking/booking-form";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BookingForm passengerIds={["1"]}/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
