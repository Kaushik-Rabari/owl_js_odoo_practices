/** @odoo-module */

import { registry } from "@web/core/registry";
import { loadJS } from "@web/core/assets";
const { Component, onWillStart, useRef, onMounted } = owl;

export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef("chart");
        onWillStart(async () => {
        await loadJS(
            "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"
            )
        })
        onMounted(() => this.renderchart())
    }

    renderchart(){
        new Chart(this.chartRef.el, {
            type: this.props.type,
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
                    // backgroundColor: [
                    //     'rgb(255, 0, 0)',
                    //     'rgb(0, 255, 0)',
                    //     'rgb(0, 0, 255)',
                    // ],
                    HoverOffset: 4
                },
                {
                    label: 'My Second Dataset',
                    data: [100, 70, 150],
                    // backgroundColor: [
                    //     'rgb(255, 0, 0)',
                    //     'rgb(0, 255, 0)',
                    //     'rgb(0, 0, 255)',
                        // 'rgb(0, 255, 255)',
                        // 'rgb(255, 0, 255)',
                        // 'rgb(255, 255, 0)',
                    // ],
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
                        text: this.props.title,
                        position: 'bottom'
                    }
                }
            },
        });
    }

}

ChartRenderer.template = "owl_dashboard.ChartRenderer";