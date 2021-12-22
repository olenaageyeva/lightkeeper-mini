import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { ErrorMessage } from "../Error/Error"
import { Info } from "../Info/Info"
import { News } from "../News/News"
import { Peers } from "../Peers/Peers"

export const Results = () => {
    const { error, info, searchTerm } = useContext(Context);

    return < main className="flex p-4 " >
        {searchTerm ?
            error || !info.name ?
                <ErrorMessage />
                : <>
                    <div>
                        <Info />
                        <Peers />
                    </div>
                    <News />
                </>
            : null
        }
    </main >
}