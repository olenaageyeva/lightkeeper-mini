import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { LightHouse } from "../LightHouse/LightHouse"

export const ErrorMessage = () => {

    const { setShouldClearSearchTerm } = useContext(Context);

    const handleClick = () => {
        setShouldClearSearchTerm(true);
        document.querySelector("input")?.focus();
    }

    return <div className="flex flex-col w-1/2 mx-auto p-8 bg-red-50 rounded-md text-white-100 justify-center ">
        <p className="text-red-300 text-center text-9xl uppercase my-4 ">Sorry</p>
        <p className="text-center text-lg font-semibold">We could not find what you are looking for...</p>
        <div className="text-center mx-auto">
            <LightHouse />
        </div>
        <button onClick={handleClick} className="text-base font-medium rounded-lg p-3 bg-pink-100 text-gray-900 w-1/2 mx-auto">Try Again</button>


    </div>
}