import PropTypes from 'prop-types';
import { Notification } from 'components/Notification';
import {
  StatisticsField,
  Title,
  StatList,
  StatGood,
  StatNeutral,
  StatBad,
  StatTotal,
  StatPositive,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total > 0 ? (
    <StatisticsField>
      <Title>Statistics</Title>
      <StatList>
        <StatGood>Good: {good}</StatGood>
        <StatNeutral>Neutral: {neutral}</StatNeutral>
        <StatBad>Bad: {bad}</StatBad>
        <StatTotal>Total: {total}</StatTotal>
        <StatPositive
          style={{
            background: `linear-gradient(#fc0f0f ${good}%, #76fa76 ${
              neutral + bad
            }%)`,
          }}
        >
          Positive feedback: {positivePercentage}%
        </StatPositive>
      </StatList>
    </StatisticsField>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
