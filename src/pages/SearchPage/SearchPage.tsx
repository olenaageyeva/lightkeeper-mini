import React, {useContext, FC} from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"
import { Context } from "../../components/Context/Context"

export const SearchPage:FC = () => {
    const {isDark}=useContext(Context);

    return <div key={isDark ? "dark" : ""} className="bg-white w-screen h-fit min-w-screen lg:min-w-min dark:bg-black min-h-130vh block">
        <div className="flex-col divide-y divide-gray-100 lg:max-w-1300px  mx-auto">
            <Header />
            <Results />
        </div>
    </div>
}
