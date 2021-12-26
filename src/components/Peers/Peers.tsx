import React, { useContext } from "react";
import { Context } from "../Context/Context"

export const Peers = () => {
    const { info, setSearchTerm, setShouldClearSearchTerm } = useContext(Context);

    const peers = info.peers ?? [];

    const handleClick = (peer: string) => {
        setSearchTerm(peer);
        setShouldClearSearchTerm(true);
        const input = document.querySelector("input")
        if (input) input.value = peer;        
    }

    return <section className="flex flex-col items-start  divide-y divide-gray-600 m-4 md:m-8 p-4 srink-0 bg-slate-50 shadow rounded-md dark:bg-gray-900 dark:text-slate-100">
        <h3 className="text-xl font-semibold">Peers </h3>
        <div className="flex flex-wrap py-4">
            {peers.map(peer => <span key={String(peer)} className="px-2 hover:bg-slate-200 dark:hover:bg-gray-500 shadow m-1" onClick={() => handleClick(String(peer))}>{peer}</span>)}
        </div>
    </section>
}
