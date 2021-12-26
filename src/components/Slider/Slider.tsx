import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slider.css"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../Context/Context";


export const Slider = () => {
    const { isDark, setIsDark } = useContext(Context);

    const handleChange = () => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark') 
            document.documentElement.classList.remove('dark')
         else 
            document.documentElement.classList.add('dark')
        

        // Whenever the user explicitly chooses light mode
        if (isDark) localStorage.theme = 'light'

        // Whenever the user explicitly chooses dark mode
        if (!isDark) localStorage.theme = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        //localStorage.removeItem('theme')
        setIsDark(!isDark);
    }

    return <div className="flex theme-switch-wrapper m-4">
        <span id="toggle-icon">
            <FontAwesomeIcon icon={isDark ? faMoon : faSun} className="text-gray-600 dark:text-gray-100 text-3xl mx-2"/>
        </span>
        <label className="theme-switch">
            <input type="checkbox" checked={isDark} onChange={handleChange} />
            <div className="slider rounded-full before:rounded-full before:bg-gray-100"></div>
        </label>
    </div>
}