interface UseDataResponse<T> {
    data: T | undefined;
    isLoading: Boolean
}

export default function useData<T>(endpoint: string): UseDataResponse<T> {
    // I can use react-query to fetch data and this hook is generic and reusable

    return {
        data: undefined,
        isLoading: false
    }
}