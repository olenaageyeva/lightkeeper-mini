import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { ErrorMessage } from "../Error/Error"
import { Info } from "../Info/Info"
import { Loader } from "../Loader/Loader"
import { News } from "../News/News"
import { Peers } from "../Peers/Peers"

export const Results = () => {
    const { error, searchTerm, isLoading, info } = useContext(Context);

    return < main className="flex p-4 " >
        {searchTerm && (error || !info.name) && !isLoading && <ErrorMessage />}
        {searchTerm && !error && info.name && !isLoading && <>
            <div>
                <Info />
                <Peers />
            </div>
            <News />
        </>}
        {isLoading && <Loader />}
    </main >
}