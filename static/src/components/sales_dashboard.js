/** @odoo-module */

import { registry } from "@web/core/registry";
import { KpiCard } from "./kpi_card/kpi_card";
import { ChartRenderer } from "./chart_renderer/chart_renderer";
import { loadJS } from "@web/core/assets";
const { Component, onWillStart, useRef, onMounted } = owl;

export class OwlSalesDashboard extends Component {
    setup() {
        this.chartRef = useRef("chart");
        onWillStart(async () => {
        await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js")
            }
        )
        onMounted(() => {
            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ];
            new Chart(this.chartRef.el, {
                type: "doughnut",
                data: {
                    labels: [
                        'Red',
                        'Green',
                        'Blue',
                    ],
                    datasets: [
                        {
                        label: 'My First Dataset',
                        data: [100, 75, 50],
                        backgroundColor: [
                            'rgb(255, 0, 0)',
                            'rgb(0, 255, 0)',
                            'rgb(0, 0, 255)',
                        ],
                        HoverOffset: 4
                    },
                    {
                        label: 'My Second Dataset',
                        data: [100, 70, 150],
                        backgroundColor: [
                            'rgb(0, 255, 255)',
                            'rgb(255, 0, 255)',
                            'rgb(255, 255, 0)',
                        ],
                        HoverOffset: 4
                    }
                ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                        position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Doughnut Chart'
                        }
                    }
                },
            });
        });
    }
}

OwlSalesDashboard.template = "owl_dashboard.OwlSalesDashboard";
OwlSalesDashboard.components = { KpiCard, ChartRenderer };

registry.category("actions").add("owl_dashboard.sales_dashboard", OwlSalesDashboard);
