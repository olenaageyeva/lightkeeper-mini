import { createContext, SetStateAction } from "react";

interface ContextType {
    searchTerm: String;
    setSearchTerm: React.Dispatch<SetStateAction<String>>;
    finnhubClient: { quote: any };
    stockData: StockType;
    setStockData: React.Dispatch<SetStateAction<StockType>>;
    info: InfoType;
    setInfo: React.Dispatch<SetStateAction<InfoType>>;
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

const defaultContext = {
    searchTerm: "",
    setSearchTerm: () => { },
    finnhubClient: { quote: () => { } },
    stockData: { c: "", h: "", l: "" },
    setStockData: () => { },
    info: {},
    setInfo: () => { }
}

export const Context = createContext<ContextType>(defaultContext);