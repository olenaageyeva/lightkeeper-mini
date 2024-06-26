import React, { useState, useContext, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { Context } from "../Context/Context";


export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { searchTerm, setSearchTerm, shouldClearSearchTerm, setShouldClearSearchTerm } = useContext(Context);
    const [term, setTerm] = useState<string>("");

    useEffect(() => {
        if (shouldClearSearchTerm) {
            setTerm(searchTerm);
            setShouldClearSearchTerm(false);
        }
    }, [shouldClearSearchTerm, setShouldClearSearchTerm, searchTerm])

    useEffect(() => {
        const termFromUrl = searchParams.get("ticker") ?? null
        if (termFromUrl && termFromUrl !== searchTerm) {
            setSearchTerm(termFromUrl);
            setTerm(termFromUrl)
        }
    }, [searchParams, setTerm])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchParams({ ticker: term })
        setSearchTerm(term.toUpperCase());
    }
    return <form onSubmit={handleSubmit} className="flex relative my-4 xl:basis-40 shrink-0 pr-4" >
        <button className="absolute left-3 top-5 md:top-1/2">
            <svg width="20" height="20" fill="currentColor" className="-mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
        </button>
        <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm "
            type="text"
            aria-label="Filter projects"
            placeholder="Enter a ticker..."
            value={term}
            onChange={(e) => setTerm(e.target.value)} />
    </form >
}