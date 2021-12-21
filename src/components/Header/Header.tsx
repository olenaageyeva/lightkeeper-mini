import React from "react"
import { Logo } from "../Logo/Logo"
import { Quote } from "../Quote/Quote"
import { Search } from "../Search/Search"

export const Header = () => <header className="flex item-start space-x-4 p-4">
    <Logo />
    <Search />
    <Quote />
</header>