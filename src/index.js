import React from 'react';

export const ExampleComponent = ({ text }) => {
  return <div>Library is working: {text}</div>
}

export { default as DonutChart } from './components/DonutChart';
export { default as DonutChart2 } from './components/DonutChart2';
export { default as PieChart } from './components/PieChart';
