import React, { useContext } from "react";
import { Context } from "../Context/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

export const Quote = () => {
  const { stockData } = useContext(Context);

  return <section className="flex relative items-start space-x-4 py-4">
    <div className="w-48 h-10 px-4 bg-slate-50 inline-block leading-loose">Price: {stockData.c}</div>
    <div className="w-48 h-10 px-4 bg-slate-50 leading-loose">High <FontAwesomeIcon icon={faLongArrowAltUp} className="text-green-600" /> {stockData.h}</div>
    <div className="w-48 h-10 px-4 bg-slate-50 leading-loose">Low <FontAwesomeIcon icon={faLongArrowAltDown} className="text-red-600" /> {stockData.l}</div>
  </section>
}
