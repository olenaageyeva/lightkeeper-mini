import React from "react"

export const MissingData = (props: { animate?: string }) => {
    const animate = props.animate ?? "";
    return <span className={`my-4 border-b-4 border-green-600 border-dashed text-transparent ${animate}`}>"_ _ _"</span>
}