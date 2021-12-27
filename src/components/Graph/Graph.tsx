import React, { useContext } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './graph.css';
import { Context } from '../Context/Context';


export const Graph = () => {

    const { info, isDark } = useContext(Context);

    const times = info.candles ? info.candles.t : [];

    const candles = info.candles ? info.candles.c.map((candle, index) => [times[index]*1000, candle]) : [];

    console.log("times", times)

    const options = {
        chart: {
            backgroundColor: isDark ? "rgb(17 24 39 / var(--tw-bg-opacity))" : "",
            plotBackgroundColor: isDark ? "rgb(17 24 39 / var(--tw-bg-opacity))" : "",
            plotShadow: true,
            borderRadius: 4,
        },
        legend: {
            enabled: false
        },
        title: {
            text: "",
            style: { color: "white" }
        },
        yAxis: {
            title: {
                enabled: false
            },
            gridLineColor: 'rgb(31 41 55 / var(--tw-bg-opacity))',
            // visible: false
        },
        xAxis: {
            // visible: false
        },
        series: [
            {
               
                data: candles,
    
            }
        ],
        rangeSelector: {
            inputPosition: {
                align: 'left',
                x: 0,
                y: 0
            },
            buttonPosition: {
                align: 'right',
                x: 0,
                y: 0
            },
        },
    };

    return (
        <section className="flex-col items-start divide-y divide-gray-600 mx-4 p-4 srink-0 bg-slate-50 shadow rounded-md dark:bg-gray-900 dark:text-slate-100">
            <h3 className="text-xl font-semibold">Stock Chart </h3>
            <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} containerProps={{ style: { width: "100%" } }} />
        </section>
    )
}


