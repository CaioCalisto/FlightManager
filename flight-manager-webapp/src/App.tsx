import React from 'react';
import './App.css';
import {Edit} from "./features/booking/passenger/edit";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                Example of Form
                <br/>
                <br/>
                <Edit passengerIds={["1"]}/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
