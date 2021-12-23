import React, { useContext } from "react";
import { Context } from "../Context/Context"

export const Peers = () => {
    const { peers, setSearchTerm, setShouldClearSearchTerm } = useContext(Context);

    const handleClick = (peer: string) => {
        setSearchTerm(peer);
        setShouldClearSearchTerm(true);
        const input = document.querySelector("input")
        if (input) input.value = peer;        
    }

    return <section className="flex flex-col items-start  divide-y divide-gray-600 m-8 p-4 srink-0 bg-slate-50">
        <h3 className="text-xl font-semibold">Peers: </h3>
        <div className="flex-wrap py-4">
            {peers.map(peer => <span className="px-2 hover:bg-slate-200" onClick={() => handleClick(String(peer))}>{peer}</span>)}
        </div>
    </section>
}
