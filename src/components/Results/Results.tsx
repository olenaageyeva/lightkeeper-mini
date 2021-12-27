import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { ErrorMessage } from "../Error/Error"
import { Graph } from "../Graph/Graph"
import { Info } from "../Info/Info"
import { Loader } from "../Loader/Loader"
import { News } from "../News/News"
import { Peers } from "../Peers/Peers"

export const Results = () => {
    const { error, searchTerm, isLoading, info: { quotes } } = useContext(Context);

    const shouldShowErrorMessage = searchTerm && (error || !quotes.c) && !isLoading;
    const shouldShowRubrics = searchTerm && !(error || !quotes.c) && !isLoading

    return < main className="w-full flex-col lg:flex lg:flex-row md:max-w-screen p-4" >
        {shouldShowErrorMessage && <ErrorMessage />}

        {shouldShowRubrics && <>
            <div className="flex flex-col basis-1/2 ">
                <Info />
                <Peers />
                <Graph />
            </div>
            <News />
        </>
        }
        {isLoading && <Loader />}       
    </main >
}