import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { ErrorMessage } from "../Error/Error"
import { Info } from "../Info/Info"
import { Loader } from "../Loader/Loader"
import { News } from "../News/News"
import { Peers } from "../Peers/Peers"

export const Results = () => {
    const { error, searchTerm, isLoading, info: { quotes } } = useContext(Context);

    return < main className="flex-col md:flex md:flex-row p-4 " >
        {searchTerm && (error || !quotes.c) && !isLoading && <ErrorMessage />}
        {searchTerm && !error && quotes.c && !isLoading && <>
            <div className="flex flex-col basis-1/2">
                <Info />
                <Peers />
            </div>
            <News />
        </>}
        {isLoading  && <Loader />} 
    </main >
}