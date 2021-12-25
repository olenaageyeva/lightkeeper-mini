import React, { useEffect, useContext, useCallback } from "react"
import { Context, ProfileType, NewsType, QuoteType } from "../Context/Context"
import { Logo } from "../Logo/Logo"
import { Quote } from "../Quote/Quote"
import { Search } from "../Search/Search"

const cache = new Map();

export const Header = () => {
    const { searchTerm, finnhubClient, setInfo, error, setError, setIsLoading } = useContext(Context);



    const fetchData = useCallback(async () => {
        if (!finnhubClient) return;

        setIsLoading(true);

        try {
            const quotes: QuoteType = await new Promise((res, rej) => finnhubClient.quote && finnhubClient.quote(searchTerm, (error: Error, data: QuoteType) => {
                if (error) return rej(error);
                res(data)
            }));

            const profile: ProfileType = await new Promise((res, rej) => finnhubClient.companyProfile2 && finnhubClient.companyProfile2({ symbol: searchTerm }, (error: Error, data: ProfileType) => {
                if (error) return rej(error);
                res(data)
            }));

            const news: NewsType[] = await new Promise((res, rej) => finnhubClient.companyNews && finnhubClient.companyNews(searchTerm, "2020-01-01", "2021-12-22", (error: Error, data: NewsType[]) => {
                if (error) return rej(error);
                res(data)
            }));

            const peers: String[] = await new Promise((res, rej) => finnhubClient.companyPeers && finnhubClient.companyPeers(searchTerm, (error: Error, data: String[]) => {
                if (error) return rej(error);
                res(data)
            }));

            cache.set(searchTerm, { profile, peers, quotes, news, error: null })
            setInfo({ profile, peers, quotes, news })
        } catch (error) {
            cache.set(searchTerm, { error: `Error ${error}` })
            setError(Error(`Error ${error}`))
        }

        setIsLoading(false)

    }, [finnhubClient, searchTerm, setIsLoading, setError, setInfo])

    useEffect(() => {
        if (searchTerm && !error) {
            if (!cache.has(searchTerm)) fetchData();
            else {
                const cached = cache.get(searchTerm)

                if (!cached.error) setInfo(cached)
                else setError(Error(`Error ${cached.error}`))
            }
        }
    }, [searchTerm, fetchData, setError, error, setInfo])

    return <header className="min-w-full md:flex md:min-w-1050 md:flex-row sm:flex-col item-start space-x-4 p-4">
        <Logo />
        <Search />
        <Quote />        
    </header>
}