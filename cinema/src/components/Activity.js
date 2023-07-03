import './components.css';
import PropTypes from 'prop-types';

export default function Activity(props) {
  const {detailedActivity} = props;
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = (detailedActivity.updatedAt).toLocaleDateString("en-US", options);
  return (
    <>
      <li>
        <p>{detailedActivity.user.username} added {detailedActivity.title.title} to {detailedActivity.activityType} - {date}</p>
      </li>
    </>
  )
}

Activity.propTypes = {
  detailedActivity: PropTypes.object,
};

Activity.defaultProps = {
  detailedActivity: null,
};
