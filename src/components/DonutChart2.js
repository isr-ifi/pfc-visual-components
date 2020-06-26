import React from 'react';
import ReactApexChart from 'react-apexcharts';

// code taken and modified from: https://apexcharts.com/react-chart-demos/pie-charts/donut-with-pattern/
// last visited: 9.11.19

/**
 * Donut Chart with different filling styles.
 *
 * @param something
 *
 * @visComp
 *
 * @props {string} title [Stock in Tons of Materials]
 * @props {string} firstFillStyle [verticalLines]
 * @props {string} secondFillStyle [squares]
 * @props {string} thirdFillStyle [horizontalLines]
 * @props {string} fourthFillStyle [circles]
 * @props {string} fiftFillStyle [slantedLines]
 *
 * @props {dynamic} modelA [aum.mfa.out.PublicVehicles] (aum.mfa.out.PublicVehicles.name)
 * @props {dynamic} modelB [aum.mfa.out.PrivateVehicles] (aum.mfa.out.PrivateVehicles.name)
 * @props {dynamic} modelC [aum.mfa.out.OtherBuildings] (aum.mfa.out.OtherBuildings.name)
 * @props {dynamic} modelD [aum.mfa.out.ResidentialBuildings] (aum.mfa.out.ResidentialBuildings.name)
 * @props {dynamic} modelE [aum.mfa.out.Industry] (aum.mfa.out.Industry.name)
 *
 * @props {dependent} valueA [24] {modelA--value.1.value}
 * @props {dependent} valueB [75] {modelB--value.1.value}
 * @props {dependent} valueC [95] {modelC--value.1.value}
 * @props {dependent} valueD [43] {modelD--value.1.value}
 * @props {dependent} valueE [42] {modelE--value.1.value}
 */
class DonutChart2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        labels: [this.props.modelA, this.props.modelB, this.props.modelC, this.props.modelD, this.props.modelE],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        fill: {
          type: 'pattern',
          opacity: 1,
          pattern: {
            enabled: true,
            style: [this.props.firstFillStyle, this.props.secondFillStyle, this.props.thirdFillStyle, this.props.fourthFillStyle, this.props.fiftFillStyle],
          },
        },
        states: {
          hover: {
            enabled: false
          }
        },
        theme: {
          palette: 'palette2'
        },
        title: {
          text: this.props.title
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [this.props.valueA, this.props.valueB, this.props.valueC, this.props.valueD, this.props.valueE]
    }
  }

  render() {
    return (



      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="100%" />
      </div>



    );
  }
}

export default DonutChart2;

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(DonutChart), domContainer);
