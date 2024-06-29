import { createContext, useState } from 'react';
import { SearchBarResult, StreamSource, StreamSourceTitleInfo } from '../utils/types';
import api from '../utils/api';

interface TitleInfoProviderTypes {
    children: React.ReactNode,
}

interface TitleInfoContextTypes {
    title: SearchBarResult | undefined;
    setTitle: (SearchBarResult: SearchBarResult) => void;
    sources: StreamSourceTitleInfo[],
    fetchStreamsByTitle: (searchResult: SearchBarResult) => void;
}

export const TitleInfoContext = createContext<TitleInfoContextTypes>({
    title: undefined,
    setTitle: () => { },
    sources: [],
    fetchStreamsByTitle: (searchResult: SearchBarResult) => { },
});

function TitleInfoProvider({ children }: TitleInfoProviderTypes) {


    const [title, setTitle] = useState<SearchBarResult | undefined>(undefined)
    const [sources, setSources] = useState<StreamSourceTitleInfo[]>([])

    const fetchStreamsByTitle = async (searchResult: SearchBarResult) => {
        const result = await api.get("title/" + searchResult.imdb_id + "/sources")
        const data = result.data as StreamSourceTitleInfo[];
        const value = data == undefined ? [] :
            data.filter((source, index, self) => {
                return self.findIndex(s => s.name === source.name) === index;
            });
        setSources(value);
    }

    return (
        <TitleInfoContext.Provider value={{ title, setTitle, sources, fetchStreamsByTitle }}>
            {children}
        </TitleInfoContext.Provider>
    );

}

export default TitleInfoProvider;