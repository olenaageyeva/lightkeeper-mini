import React, { useState, useEffect, useContext } from "react"
import { Context } from "../Context/Context"
import { Logo } from "../Logo/Logo"
import { Quote } from "../Quote/Quote"
import { Search } from "../Search/Search"

export const Header = () => {
    const { searchTerm, finnhubClient, setStockData } = useContext(Context);
    
    const [error, setError] = useState("");

    const fetchData = async () => {
        if (!finnhubClient) return;
        finnhubClient.quote(searchTerm, (error: Error, data: { c: any, h: any, l: any }, response: object) => {
            if (error) {
                console.log("error", error)
                setError(String(error));
                return;
            }
            setStockData(data)
            console.log(data)
        });       
    }

    useEffect(() => {
        if (searchTerm) fetchData();
    }, [searchTerm])

    return <header className="min-w-1050 flex item-start space-x-4 p-4">
        <Logo />
        <Search />
        <Quote />
    </header>
}