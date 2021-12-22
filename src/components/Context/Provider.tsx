import { useState } from "react";
import { Context, InfoType, StockType } from "./Context";

const finnhub = require('finnhub');

export const Provider: React.FC<React.ReactNode> = ({ children }) => {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c716kraad3i9rhb96p3g";
    const finnhubClient = new finnhub.DefaultApi()

    const [searchTerm, setSearchTerm] = useState<String>("");
    const [stockData, setStockData] = useState<StockType>({ c: "", h: "", l: "" });
    const [info, setInfo] = useState<InfoType>({})

    return <Context.Provider value={{
        searchTerm,
        setSearchTerm,
        finnhubClient,
        stockData,
        setStockData,
        info,
        setInfo
    }}>{children}</Context.Provider>
}