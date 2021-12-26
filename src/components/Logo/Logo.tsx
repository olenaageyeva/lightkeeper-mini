import React, { useContext } from "react"
import { Context } from "../Context/Context"

import logoInverted from "./logo_inverted.png"
import logo from "./logo.png"

export const Logo = () => {
    const {isDark} = useContext(Context)
return<a href="/" className="flex w-fit h-fit srink-0 rounded-md">
    <img className="mx-4" src={isDark ? logoInverted : logo} alt="lightkeeper" />
    </a>
}