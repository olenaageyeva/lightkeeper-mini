import React, { useContext } from "react"
import { Context } from "../Context/Context"
import logoPlaceholder from "./logo-placeholder.png"

export const Info = () => {

    const { info } = useContext(Context);

    function formatPhoneNumber(phoneNumberString: string) {
        const cleaned = (phoneNumberString).trim();
        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})?\.?(\d+)$/);
        if (match) {
            return match[1] + '-(' + match[2] + ') ' + match[3] + '-' + match[4] + ' (ext: ' + match[5] + ')';
        }
        return null;
    }

    return <article className="flex-auto flex-col relative mx-8 p-4 bg-slate-50">
        <section className="flex space-x-4 justify-items-center justify-between p-4">
            <img alt="logo" src={info.logo || logoPlaceholder} className="w-24 h-auto srink-0 rounded-xl"></img>
            <h2 className="font-bold text-3xl flex-wrap">{info.name}</h2>
            <p className="h-10 text-3xl">{info.ticker}</p>
        </section>
        <div className="flex flex-col p-4">
            <p>{info.weburl}</p>
            <p>{(info.phone && formatPhoneNumber(info.phone)) || info.phone}</p>
        </div>
        <div className="flex flex-col p-4">
            <p className="flex justify-between">
                <span className="font-semibold text-gray-900">Market Capitalization:</span>
                <span> {info.marketCapitalization}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-gray-900">Share Outstanding: </span>
                <span>{info.shareOutstanding}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-gray-900">Industry: </span>
                <span>{info.finnhubIndustry}</span>
            </p>
        </div>
    </article>
}