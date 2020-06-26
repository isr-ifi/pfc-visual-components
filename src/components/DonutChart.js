import React from 'react';
import ReactApexChart from 'react-apexcharts';

// code taken and modified from: https://apexcharts.com/react-chart-demos/pie-charts/gradient-donut/
// last visited: 9.11.19

/**
 * Donut Chart
 *
 * @visComp
 * @param something
 *
 * @props {dynamic} modelA [aum.mfa.out.PublicVehicles] (aum.mfa.out.PublicVehicles.name)
 * @props {dynamic} modelB [aum.mfa.out.PrivateVehicles] (aum.mfa.out.PrivateVehicles.name)
 * @props {dynamic} modelC [aum.mfa.out.OtherBuildings] (aum.mfa.out.OtherBuildings.name)
 * @props {dynamic} modelD [aum.mfa.out.ResidentialBuildings] (aum.mfa.out.ResidentialBuildings.name)
 * @props {dynamic} modelE [aum.mfa.out.Industry] (aum.mfa.out.Industry.name)
 *
 * @props {dependent} valueA [440] {modelA--value.3.value}
 * @props {dependent} valueB [554] {modelB--value.3.value}
 * @props {dependent} valueC [552] {modelC--value.3.value}
 * @props {dependent} valueD [433] {modelD--value.3.value}
 * @props {dependent} valueE [224] {modelE--value.3.value}
 */
class DonutChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        title: {
          text: 'Stock Number of Vehicles'
        },
        labels: [this.props.modelA, this.props.modelB, this.props.modelC, this.props.modelD, this.props.modelE],
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
      series: [this.props.valueA, this.props.valueB, this.props.valueC, this.props.valueD, this.props.valueE],
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

export default DonutChart;

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(DonutChart), domContainer);



