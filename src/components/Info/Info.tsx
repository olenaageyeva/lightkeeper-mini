import React, { useContext } from "react"
import { Context } from "../Context/Context"

export const Info = () => {

    const { info } = useContext(Context);

    return <article className="flex-auto flex-col relative mx-8 p-4 bg-slate-50">
        <section className="flex space-x-4 justify-items-center justify-between p-4">
            <img alt="logo" src={info.logo} className="w-50 h-50 srink-0"></img>
            <h2 className="font-bold text-3xl">{info.name}</h2>
            <p className="h-10 text-3xl">{info.ticker}</p>
        </section>
        <div className="flex flex-col space-y-4 p-4">
            <p>Website: {info.weburl}</p>
            <p>Phone: {info.phone}</p>
        </div>
        <div className="flex flex-col space-4">
            <p className="flex justify-between">
                <span>Market Capitalization:</span>
                <span> {info.marketCapitalization}</span>
            </p>
            <p className="flex justify-between">
                <span>Share Outstanding: </span>
                <span>{info.shareOutstanding}</span>
            </p>
            <p className="flex justify-between">
                <span>Industry: </span>
                <span>{info.finnhubIndustry}</span>
            </p>
        </div>
    </article>
}