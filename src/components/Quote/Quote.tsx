import React, { useContext } from "react";
import { Context } from "../Context/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const Quote = () => {
  const { info: {quotes}, error, isLoading, searchTerm } = useContext(Context);

  interface QuoteType {
    title: string;
    iconProps?: { icon: IconDefinition, className: string, rest?: any };
    data: string;
  }

  const QuoteCard = (props: QuoteType) => {
    const { title, data, iconProps } = props;
    return <div className="flex w-48 h-10 px-4 bg-slate-50 hover:bg-slate-100 inline-block leading-loose srink-0 justify-between shadow">
      <span className="font-semibold text-gray-900"> {title}
        {iconProps && <FontAwesomeIcon  {...iconProps} />}
      </span>
      <span>{!error && !isLoading && searchTerm && Number(data).toLocaleString()}</span>
      <span className="text-green-600 text-xl font-bold">{(error || !searchTerm) && "- - -"}</span>
    </div>
  }

  return <section className="flex relative items-start space-x-4 py-4 srink-0">
    <QuoteCard {...{ title: "Price:", data: quotes.c }} />
    <QuoteCard {...{ title: "High ", data: quotes.h, iconProps: { icon: faLongArrowAltUp, className: "text-green-600" } }} />
    <QuoteCard {...{ title: "Low ", data: quotes.l, iconProps: { icon: faLongArrowAltDown, className: "text-red-600" } }} />
  </section>

}
