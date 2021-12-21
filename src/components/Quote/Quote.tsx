import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

export const Quote = () => (
  <section className="flex relative items-start space-x-4 py-4">
    <div className="w-48 h-10 px-4 bg-slate-50 inline-block leading-loose">Price</div>
    <div className="w-48 h-10 px-4 bg-slate-50 leading-loose">High <FontAwesomeIcon icon={faLongArrowAltUp} className="text-green-600" /></div>
    <div className="w-48 h-10 px-4 bg-slate-50 leading-loose">Low <FontAwesomeIcon icon={faLongArrowAltDown} className="text-red-600" /></div>
  </section>
);
