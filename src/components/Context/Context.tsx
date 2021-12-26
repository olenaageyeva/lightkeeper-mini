import { createContext, SetStateAction } from "react";

interface ContextType {
    searchTerm: string;
    setSearchTerm: React.Dispatch<SetStateAction<string>>;
    finnhubClient: FinnhubClientType;    
    info: InfoType;
    setInfo: React.Dispatch<SetStateAction<InfoType>>; 
    error: Error | null;   
    setError: React.Dispatch<SetStateAction<Error | null>>;
    shouldClearSearchTerm: boolean;
    setShouldClearSearchTerm: React.Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<SetStateAction<boolean>>;
    isDark: boolean;
    setIsDark: React.Dispatch<SetStateAction<boolean>>;
}

export interface FinnhubClientType {
    quote?: (param: String, cb: (err: Error, data: QuoteType) => any) => void;
    companyProfile2?: (options: { symbol: String }, cb: (err: Error, data: ProfileType) => any) => void;
    companyNews?: (param: String, start: String, end: String, cb: (err: Error, data: NewsType[]) => any) => void;
    companyPeers?: (params: String, cb: (err: Error, data: String[])=>any)=> void;
}

export interface InfoType {
    profile?: ProfileType;
    quotes: QuoteType;
    news?: NewsType[];
    peers?: String[];
}

export interface QuoteType {
    c?: any;
    h?: any;
    l?: any;
}

export interface ProfileType {
    logo?: any;
    name?: any;
    ticker?: any;
    weburl?: string;
    phone?: string;
    marketCapitalization?: any;
    shareOutstanding?: any;
    finnhubIndustry?: any;
}

export interface NewsType {
    headline?: any;
    image?: any;
    source?: any;
    datetime?: any;
}


const defaultContext = {
    searchTerm: "",
    setSearchTerm: () => { },
    finnhubClient: {},  
    info: {quotes: {}},
    setInfo: () => { },    
    error: null,
    setError: () => { },
    shouldClearSearchTerm: false,
    setShouldClearSearchTerm: () => { },
    isLoading: false,
    setIsLoading: () => { },
    isDark: true,
    setIsDark: ()=>{}
}

export const Context = createContext<ContextType>(defaultContext);