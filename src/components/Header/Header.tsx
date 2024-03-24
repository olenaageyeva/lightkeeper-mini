import React, { useEffect, useContext, useCallback } from "react"
import { Context, ProfileType, NewsType, QuoteType, CandleType, RecommendationType } from "../Context/Context"
import { Logo } from "../Logo/Logo"
import { Quote } from "../Quote/Quote"
import { Search } from "../Search/Search"
import { Slider } from "../Slider/Slider"

const mockCandleData = {
    "c": [
        217.68,
        221.03,
        219.89
    ],
    "h": [
        222.49,
        221.5,
        220.94
    ],
    "l": [
        217.19,
        217.1402,
        218.83
    ],
    "o": [
        221.03,
        218.55,
        220
    ],
    "s": "ok",
    "t": [
        1569297600,
        1569384000,
        1569470400
    ],
    "v": [
        33463820,
        24018876,
        20730608
    ]
}

const cache = new Map();

export const Header = () => {

    const { searchTerm, finnhubClient, setInfo, error, setError, setIsLoading, info } = useContext(Context);



    const fetchData = useCallback(async () => {
        if (!finnhubClient) return;

        setIsLoading(true);

        const todayDate = new Date();
        const dateOffset = 183 * 24 * 60 * 60; //6 month from now      


        try {
            const quotes: QuoteType = await new Promise((res, rej) => finnhubClient.quote && finnhubClient.quote(searchTerm, (error: Error, data: QuoteType) => {
                if (error) return rej(error);
                res(data)
            }));

            const profile: ProfileType = await new Promise((res, rej) => finnhubClient.companyProfile2 && finnhubClient.companyProfile2({ symbol: searchTerm }, (error: Error, data: ProfileType) => {
                if (error) return rej(error);
                res(data)
            }));

            const news: NewsType[] = await new Promise((res, rej) => finnhubClient.companyNews && finnhubClient.companyNews(searchTerm, "2021-12-01", todayDate.toISOString().split('T')[0], (error: Error, data: NewsType[]) => {
                if (error) return rej(error);
                res(data)
            }));

            const peers: string[] = await new Promise((res, rej) => finnhubClient.companyPeers && finnhubClient.companyPeers(searchTerm, (error: Error, data: string[]) => {
                if (error) return rej(error);
                res(data)
            }));

            const candles: CandleType = await new Promise((res, rej) => finnhubClient.stockCandles && finnhubClient.stockCandles(searchTerm, "D", Math.floor(todayDate.getTime() / 1000 - dateOffset), Math.floor(todayDate.getTime() / 1000), (error: Error, data: CandleType) => {
                if (error) return res(mockCandleData);
                res(data || [])
            }))

            const recommendation: string = await new Promise((res, rej) => finnhubClient.recommendationTrends && finnhubClient.recommendationTrends(searchTerm, (error: Error, data: RecommendationType[]) => {
                if (error) return rej(error);

                let recommendation = "NONE";
                if (data.length) {
                    const { sell, buy, hold } = data[0];
                    recommendation = sell > buy && sell > hold ? "SELL" : recommendation;
                    recommendation = buy > sell && buy > hold ? "BUY" : recommendation;
                    recommendation = hold > buy && hold > sell ? "HOLD" : recommendation;
                }
                res(recommendation)
            }))


            cache.set(searchTerm, { profile, peers, quotes, candles, news, recommendation, error: null })
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



    return <header className="flex-col lg:flex lg:flex-row lg:justify-beetween lg:min-w-max  item-start space-x-4 p-4">
        <Logo />
        <Search />
        <Quote />
        <Slider />
    </header>
}