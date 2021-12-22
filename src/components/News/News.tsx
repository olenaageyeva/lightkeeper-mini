import React, { useContext } from "react"
import { Context } from "../Context/Context"

export const News = () => {
    const { news } = useContext(Context);
    console.log("news", news);
    const formatDate = (unixTimeStamp: string) => {
        const date = new Date(Number(unixTimeStamp) * 1000);
        return date.toLocaleDateString();
    }
    return <aside className="flex flex-col flex-auto relative divide-y divide-gray-600 p-4 bg-slate-50">
        <h3 className="text-xl font-semibold">News</h3>
        <section>
            {news.slice(0, 5).map((item) => <div className="flex m-4 p-4 bg-gray-100 rounded-md">
                <div className="flex-none w-36 relative">
                    <img alt="news" className="absolute inset-0 w-full object-cover rounded-md" src={item.image}></img>
                </div>
                <div className="flex-auto px-4">
                    <span className="flex flex-wrap">
                        <span className="flex-auto text-lg font-semibold text-gray-900">{item.source}</span>
                        <span className="text-lg font-semibold text-gray-500">{formatDate(item.datetime)}</span>
                    </span>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-gray-400">{item.headline}</p>
                </div>
            </div>)}
        </section>



    </aside>
}