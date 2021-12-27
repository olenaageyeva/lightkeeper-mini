import React, { useContext } from "react"
import { Context, NewsType } from "../Context/Context"
import newsPlaceholder from "./download.jpg"

export const News = () => {
    const { info } = useContext(Context);

    const news = info.news ?? [];
   
    const formatDate = (unixTimeStamp: string) => {
        const date = new Date(Number(unixTimeStamp) * 1000);
        return date.toLocaleDateString();
    }
    return <aside className="flex flex-col m-4 h-fit lg:m-0 basis-1/2 relative divide-y divide-gray-600 p-4 bg-slate-50 rounded-md shadow animate-fadein dark:bg-gray-900 dark:text-slate-100">
        <h3 className="text-xl font-semibold">News</h3>
        <section>
            {news.slice(0, 5).map((item: NewsType) => <div key={item.headline} className="flex-col md:flex  md:flex-row my-2 md:my-4 lx:m-4 bg-gray-100 rounded-md hover:bg-slate-200 shadow animate-fadein dark:bg-gray-800">
                <div className="flex w-fit md:flex-none md:w-48  relative align-middle overflow-hidden relative rounded-xl">
                    <img alt="news" className="inset-0 w-auto  object-cover rounded-md" src={item.image || newsPlaceholder}></img>
                </div>
                <div className="flex-auto px-4 py-2">
                    <span className="flex flex-wrap">
                        <span className="flex-auto text-lg font-semibold text-gray-900 dark:text-slate-100">{item.source}</span>
                        <span className="text-lg font-semibold text-gray-500 dark:text-slate-200">{formatDate(item.datetime)}</span>
                    </span>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-50">{item.headline}</p>
                </div>
            </div>)}
        </section>



    </aside>
}