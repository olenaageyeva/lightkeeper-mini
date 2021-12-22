import React, { useEffect, useContext, useCallback } from "react"
import { Context, InfoType, NewsType, StockType } from "../Context/Context"
import { Logo } from "../Logo/Logo"
import { Quote } from "../Quote/Quote"
import { Search } from "../Search/Search"

const cache = new Map();

export const Header = () => {
    const { searchTerm, finnhubClient, setStockData, setInfo, setNews, setPeers, news, info, stockData, peers, error, setError } = useContext(Context);

    const fetchData = useCallback(async () => {
        if (!finnhubClient) return;

        if (!cache.has(searchTerm)) {
            setError(null);
            try {
                const stockData = await new Promise((res, rej) => finnhubClient.quote && finnhubClient.quote(searchTerm, (error: Error, data: StockType) => {
                    if (error) {
                        setError(error);
                        return rej(error);
                    }
                    res(data)

                }));

                const info = await new Promise((res, rej) => finnhubClient.companyProfile2 && finnhubClient.companyProfile2({ symbol: searchTerm }, (error: Error, data: InfoType) => {
                    if (error) {
                        console.log("error", error)
                        setError(error);
                        return rej(error);
                    }
                    res(data);
                }));

                const news = await new Promise((res, rej) => finnhubClient.companyNews && finnhubClient.companyNews(searchTerm, "2020-01-01", "2021-12-22", (error: Error, data: NewsType) => {
                    if (error) {
                        console.log("error", error)
                        setError(error);
                        return rej(error);
                    }
                    res(data)

                }));

                const peers = await new Promise((res, rej) => finnhubClient.companyPeers && finnhubClient.companyPeers(searchTerm, (error: Error, data: String[]) => {
                    if (error) {
                        console.log("error", error)
                        setError(error);
                        return rej(error);
                    }
                    res(data)
                }));

                cache.set(searchTerm, { info, peers, stockData, news, error: null })
            } catch (error) {
                setError(Error(String(error)))
                cache.set(searchTerm, { error })
            }
        }

        const cached = cache.get(searchTerm)

        if (!cached.error) {
            if (news !== cached.news) setNews(cached.news)
            if (stockData !== cached.stockData) setStockData(cached.stockData)
            if (peers !== cached.peers) setPeers(cached.peers)
            if (info !== cached.info) setInfo(cached.info)
        }

    }, [finnhubClient, searchTerm, setStockData, setPeers, setInfo, setNews, info, news, peers, stockData, setError])

    useEffect(() => {
        if (searchTerm) fetchData();
    }, [searchTerm, fetchData])

    return <header className="min-w-1050 flex item-start space-x-4 p-4">
        <Logo />
        <Search />
        <Quote />
        {error && <p>Error</p>}
    </header>
}