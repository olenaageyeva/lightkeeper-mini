import React, {useContext} from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"
import { Context } from "../../components/Context/Context"

export const SearchPage = () => {
    const {isDark}=useContext(Context);

    return <div key={isDark ? "dark" : ""} className="bg-white w-fit max-w-screen dark:bg-gray-900 h-fit min-h-screen">
        <div className="divide-y divide-gray-100 w-screen md:max-w-1300px md:min-w-1100px md:w-50 mx-auto">
            <Header />
            <Results />
        </div>
    </div>
}
