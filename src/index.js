import React from 'react';

import CarbonBudget from './components/CarbonBudget/CarbonBudget';
import DonutChart from './components/DonutChart/DonutChart';
import DonutChart2 from './components/DonutChart2/DonutChart2';
import GenericRolls from './components/Generic/GenericRolls/GenericRolls';
import GenericTimeseries from './components/Generic/GenericTimeseries/GenericTimeseries';
import GenericValue from './components/Generic/GenericValue/GenericValue';
import PieChart from './components/PieChart/PieChart';
import RollspecificGoals from './components/RollspecificGoals/RollspecificGoals';

export const ExampleComponent = ({ text }) => {
  return <div>Library is working: {text}</div>
}

export const visualComponentDict = {
  donut_chart: DonutChart,
  donut_chart_2: DonutChart2,
  generic_rolls: GenericRolls,
  generic_timeseries: GenericTimeseries,
  generic_value: GenericValue,
  pie_chart: PieChart,
  rollspecific_goals: RollspecificGoals,
  carbon_budget: CarbonBudget
}
