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

    interface InfoRowPropType {
        title: string;
        data: string;
    }

    const InfoRow = ({ title, data }: InfoRowPropType) =>
        <p className="flex justify-between ">
            <span className="font-semibold text-gray-900 dark:text-gray-200">{title}: </span>
            <span className="text-sm">{data}</span>
        </p>


    return <article className="flex flex-col mx-4 p-4 bg-slate-50 shadow animate-fadein rounded-md dark:bg-gray-900 dark:text-slate-50 divide-y divide-gray-600">
        <h3 className="text-xl font-semibold">Company Profile </h3>
        <section className="py-4">
            <div className="flex-col md:flex-row md:flex justify-items-center justify-between  animate-fadein">
                <img alt="logo" src={profile.logo || logoPlaceholder} className="w-1/3 rounded-xl"></img>
                <h2 className="font-bold w-1/3 text-xl xl:text-3xl flex-wrap">{profile.name}</h2>
                <p className="text-3xl">{profile.ticker}</p>
            </div>
            <div className="flex flex-col py-4">
                <p>{profile.weburl}</p>
                <p>{(profile.phone && formatPhoneNumber(profile.phone)) || profile.phone}</p>
            </div>
            <div className="flex flex-col">
                <InfoRow title="Market Capitalization" data={profile.marketCapitalization} />
                <InfoRow title="Share Outstanding" data={profile.shareOutstanding} />
                <InfoRow title="Industry" data={profile.finnhubIndustry} />
            </div>
        </section>
    </article>
}