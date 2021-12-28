import React, {useContext} from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"
import { Context } from "../../components/Context/Context"

export const SearchPage = () => {
    const {isDark}=useContext(Context);

    return <div key={isDark ? "dark" : ""} className="bg-white w-screen h-fit min-w-screen dark:bg-black min-h-screen block">
        <div className="flex-col divide-y divide-gray-100 2xl:max-w-1300px 2xl:min-w-1100px mx-auto">
            <Header />
            <Results />
        </div>
    </div>
}
