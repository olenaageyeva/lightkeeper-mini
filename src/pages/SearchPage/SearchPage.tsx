import React from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"

export const SearchPage = () => {

return <div className="divide-y divide-gray-100 w-screen md:max-w-1300px md:min-w-1100px md:w-50 mx-auto">
    <Header />
    <Results />
</div>
}
