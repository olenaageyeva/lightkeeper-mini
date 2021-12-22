import { useState } from "react";
import { Context, InfoType, NewsType, StockType } from "./Context";

const finnhub = require('finnhub');

export const Provider: React.FC<React.ReactNode> = ({ children }) => {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c716kraad3i9rhb96p3g";
    const finnhubClient = new finnhub.DefaultApi()

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [stockData, setStockData] = useState<StockType>({ c: "", h: "", l: "" });
    const [info, setInfo] = useState<InfoType>({})
    const [news, setNews] = useState<NewsType[]>([])
    const [peers, setPeers] = useState<String[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [shouldClearSearchTerm, setShouldClearSearchTerm] = useState(false);

    return <Context.Provider value={{
        searchTerm,
        setSearchTerm,
        finnhubClient,
        stockData,
        setStockData,
        info,
        setInfo,
        news,
        setNews,
        peers,
        setPeers,
        error,
        setError,
        shouldClearSearchTerm,
        setShouldClearSearchTerm
    }}>{children}</Context.Provider>
}