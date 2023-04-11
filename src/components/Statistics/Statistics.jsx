import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  ListItem,
  ListItemLabel,
  ListItemPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <ListItemLabel>{label}</ListItemLabel>
            <ListItemPercentage>{percentage}%</ListItemPercentage>
          </ListItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
