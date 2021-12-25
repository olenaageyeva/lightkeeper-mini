import React, { useContext } from "react";
import { Context } from "../Context/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MissingData } from "../MissingData/MissingData";

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
      {!error && !isLoading && searchTerm && <span className="">${Number(data).toLocaleString()}</span>}
      {(isLoading && searchTerm) &&<MissingData animate="animate-pulse" />}
      {(error && !isLoading) && <MissingData />}
    </div>
  }

  return <section className="flex-col space-y-4 md:space-y-0 md:flex-row md:flex relative items-start md:space-x-4 py-4 srink-0">
    <QuoteCard {...{ title: "Price:", data: quotes.c }} />
    <QuoteCard {...{ title: "High ", data: quotes.h, iconProps: { icon: faLongArrowAltUp, className: "text-green-600" } }} />
    <QuoteCard {...{ title: "Low ", data: quotes.l, iconProps: { icon: faLongArrowAltDown, className: "text-red-600" } }} />
  </section>

}
