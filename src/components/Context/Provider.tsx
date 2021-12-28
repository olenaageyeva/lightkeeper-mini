import React, { useEffect, useState } from "react";
import { Context, InfoType } from "./Context";

const finnhub = require('finnhub');

export const Provider: React.FC<React.ReactNode> = ({ children }) => {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "c716kraad3i9rhb96p3g";
    const finnhubClient = new finnhub.DefaultApi()

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [info, setInfo] = useState<InfoType>({ quotes: {} })
    const [error, setError] = useState<Error | null>(null)
    const [shouldClearSearchTerm, setShouldClearSearchTerm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDark, setIsDark] = useState(localStorage.theme === "dark");

    useEffect(() => {
        isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [isDark])

        return <Context.Provider value={{
        searchTerm,
        setSearchTerm,
        finnhubClient,
        info,
        setInfo,
        error,
        setError,
        shouldClearSearchTerm,
        setShouldClearSearchTerm,
        isLoading,
        setIsLoading,
        isDark,
        setIsDark
    }}>{children}</Context.Provider>
}