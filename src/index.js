import React from 'react';

import CarbonBudget from './components/CarbonBudget/CarbonBudget';
import DonutChart from './components/DonutChart/DonutChart';
import DonutChart2 from './components/DonutChart2/DonutChart2';
import GenericRolls from './components/Generic/GenericRolls/GenericRolls';
import GenericTimeseries from './components/Generic/GenericTimeseries/GenericTimeseries';
import GenericValue from './components/Generic/GenericValue/GenericValue';
import PieChart from './components/PieChart/PieChart';
import EnergyProvider from './components/RollspecificGoals/EnergyProvider/EnergyProvider';
import Industry from './components/RollspecificGoals/Industry/Industry';
import Planer from './components/RollspecificGoals/Planer/Planer';
import RollspecificGoals from './components/RollspecificGoals/RollspecificGoals';

export const ExampleComponent = ({ text }) => {
  return <div>Library is working: {text}</div>
}

export const visualComponentDict = {
  donut_chart: DonutChart,
  donut_chart_2: DonutChart2,
  energy_provider: EnergyProvider,
  generic_rolls: GenericRolls,
  generic_timeseries: GenericTimeseries,
  generic_value: GenericValue,
  industry: Industry,
  pie_chart: PieChart,
  planer: Planer,
  rollspecific_goals: RollspecificGoals,
  carbon_budget: CarbonBudget
}
