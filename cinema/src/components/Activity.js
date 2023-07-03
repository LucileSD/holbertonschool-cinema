import './components.css';
import PropTypes from 'prop-types';


export default function Activity(props) {
  const {detailedActivity} = props;
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newDate = new Date(detailedActivity.updatedAt)
  const date = newDate.toLocaleDateString("en-US", options);
  return (
    <>
      <li className='activity-li'>
        <p className='para'><span className='red'>{detailedActivity.user.username}</span> added<span className='red'>{detailedActivity.title.title}</span> to {detailedActivity.activityType} - {date}</p>
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
