import { createContext } from 'react';
import { StreamSource } from '../utils/types';
import { useQuery } from 'react-query';
import apiClient from '../utils/api';

interface StreamDataProviderTypes {
    children: React.ReactNode,
}

interface StreamDataContextTypes {
    streams: StreamSource[] | undefined;
    isLoading: boolean;
    error: any;
    fetchStreams: () => void; // Function to manually refetch streams
}
export const StreamDataContext = createContext<StreamDataContextTypes>({
    streams: undefined,
    isLoading: false,
    error: undefined,
    fetchStreams: () => { },
});

function useFetchStreams() {
    return useQuery('streams', async () => {
        const response = await apiClient.get("sources");
        return response.data as StreamSource[]; 
    }, {
        enabled: true, 
    });
}

function StreamDataProvider({ children }: StreamDataProviderTypes) {

    const { data: streams, isLoading, error, refetch } = useFetchStreams();

    // Function to manually refetch streams (exposed through context)
    const fetchStreams = () => refetch();

    return (
        <StreamDataContext.Provider value={{ streams, isLoading, error, fetchStreams }}>
            {children}
        </StreamDataContext.Provider>
    );

}


export default StreamDataProvider;