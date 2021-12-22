import { createContext, SetStateAction } from "react";

interface ContextType {
    searchTerm: string;
    setSearchTerm: React.Dispatch<SetStateAction<string>>;
    finnhubClient: FinnhubClientType;
    stockData: StockType;
    setStockData: React.Dispatch<SetStateAction<StockType>>;
    info: InfoType;
    setInfo: React.Dispatch<SetStateAction<InfoType>>;
    news: NewsType[];
    setNews: React.Dispatch<SetStateAction<NewsType[]>>;
    peers: String[];
    setPeers: React.Dispatch<SetStateAction<String[]>>;
    error: Error | null;
    setError: React.Dispatch<SetStateAction<Error | null>>;
    shouldClearSearchTerm: boolean;
    setShouldClearSearchTerm: React.Dispatch<SetStateAction<boolean>>;
}

export interface FinnhubClientType {
    quote?: (param: String, cb: (err: Error, data: StockType) => any) => void;
    companyProfile2?: (options: { symbol: String }, cb: (err: Error, data: InfoType) => any) => void;
    companyNews?: (param: String, start: String, end: String, cb: (err: Error, data: NewsType) => any) => void;
    companyPeers?: any;
}

export interface StockType {
    c?: any;
    h?: any;
    l?: any;
}

export interface InfoType {
    logo?: any;
    name?: any;
    ticker?: any;
    weburl?: any;
    phone?: any;
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
    stockData: { c: "", h: "", l: "" },
    setStockData: () => { },
    info: {},
    setInfo: () => { },
    news: [],
    setNews: () => { },
    peers: [],
    setPeers: () => { },
    error: null,
    setError: () => { },
    shouldClearSearchTerm: false,
    setShouldClearSearchTerm: ()=>{}
}

export const Context = createContext<ContextType>(defaultContext);