import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { ErrorMessage } from "../Error/Error"
import { Info } from "../Info/Info"
import { Loader } from "../Loader/Loader"
import { News } from "../News/News"
import { Peers } from "../Peers/Peers"

export const Results = () => {
    const { error, searchTerm, isLoading, info: { quotes } } = useContext(Context);

    const shouldShowErrorMessage = searchTerm && (error || !quotes.c) && !isLoading;
    const shouldShowRubrics = searchTerm && !(error || !quotes.c) && !isLoading

    return < main className="max-w-screen flex-col md:flex md:flex-row p-4" >
        {shouldShowErrorMessage && <ErrorMessage />}
        {shouldShowRubrics && <>
            <div className="flex flex-col basis-1/2">
                <Info />
                <Peers />
            </div>
            <News />
        </>
        }
        {isLoading && <Loader />}
    </main >
}