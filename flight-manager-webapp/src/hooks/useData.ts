import axios from "axios";
import {useQuery} from "react-query";

interface UseDataResponse<T> {
    data: T | undefined;
    isLoading: Boolean
}

const fetchPassengers = (endpoint: string) => {
    return axios
        .get(`http://localhost:4000${endpoint}`)
}

export default function useData<T>(endpoint: string) {
    // I can use react-query to fetch data and this hook is generic and reusable
    return useQuery(['booking'], () => fetchPassengers(endpoint),
        {
            //cacheTime: 5000,
            //refetchInterval: 1000,
            enabled: true,
        })
}