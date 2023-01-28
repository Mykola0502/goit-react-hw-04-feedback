import PropTypes from 'prop-types';

import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ stat, total, positivePercentage }) => (
  <StatList>
    {Object.entries(stat).map(([key, value]) => (
      <StatItem key={key}>
        {key}: {value}
      </StatItem>
    ))}
    <StatItem>Total: {total}</StatItem>
    <StatItem>Positive feedback: {total && positivePercentage}%</StatItem>
  </StatList>
);

Statistics.propTypes = {
  stat: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
