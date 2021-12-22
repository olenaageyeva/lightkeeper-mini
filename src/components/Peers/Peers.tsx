import React, { useContext } from "react";
import { Context } from "../Context/Context"

export const Peers = () => {
    const { peers } = useContext(Context);

    return <section className="flex flex-col items-start  divide-y divide-gray-600 m-8 p-4 srink-0 bg-slate-50">
        <h3 className="text-xl font-semibold">Peers: </h3>
        <div className="flex-wrap py-4">
            {peers.map(peer => <span className="mx-2">{peer}</span>)}
        </div>
    </section>
}
