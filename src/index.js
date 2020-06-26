import React from 'react';

import DonutChart from './components/DonutChart';
import DonutChart2 from './components/DonutChart2';
import PieChart from './components/PieChart';

export const ExampleComponent = ({ text }) => {
  return <div>Library is working: {text}</div>
}

export const visualComponentDict = {
  donut_chart: DonutChart,
  donut_chart_2: DonutChart2,
  pie_chart: PieChart
}
