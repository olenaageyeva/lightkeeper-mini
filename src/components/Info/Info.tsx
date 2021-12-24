import React, { useContext } from "react"
import { Context } from "../Context/Context"
import logoPlaceholder from "./logo-placeholder.png"

export const Info = () => {

    const { info } = useContext(Context);
    const profile = info.profile ?? {};

    function formatPhoneNumber(phoneNumberString: string) {
        const cleaned = (phoneNumberString).trim();
        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})?\.?(\d+)$/);
        if (match) {
            return match[1] + '-(' + match[2] + ') ' + match[3] + '-' + match[4] + ' (ext: ' + match[5] + ')';
        }
        return null;
    }

    return <article className="flex flex-col relative mx-8 p-4 bg-slate-50 shadow animate-fadein">
        <section className="flex space-x-4 justify-items-center justify-between p-4 animate-fadein">
            <img alt="logo" src={profile.logo || logoPlaceholder} className="w-24 h-auto srink-0 rounded-xl"></img>
            <h2 className="font-bold text-3xl flex-wrap animate-fadein">{profile.name}</h2>
            <p className=" text-3xl">{profile.ticker}</p>
        </section>
        <div className="flex flex-col p-4">
            <p>{profile.weburl}</p>
            <p>{(profile.phone && formatPhoneNumber(profile.phone)) || profile.phone}</p>
        </div>
        <div className="flex flex-col p-4">
            <p className="flex justify-between">
                <span className="font-semibold text-gray-900">Market Capitalization:</span>
                <span> {profile.marketCapitalization}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-gray-900">Share Outstanding: </span>
                <span>{profile.shareOutstanding}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-gray-900">Industry: </span>
                <span>{profile.finnhubIndustry}</span>
            </p>
        </div>
    </article>
}