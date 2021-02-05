import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import classes from './error.module.scss';

const Error = ({ message, setError }) => {
  return (
    <div className={classes.error}>
      <div className={classes.block}>
        <div className={classes.body}>
          <FontAwesomeIcon
            style={{
              color: '#990000',
              width: '65px',
              fontSize: '45px',
              marginRight: '20px',
            }}
            icon={faExclamationTriangle}
          />
          <p>{message}</p>
        </div>
        <button type="button" className={classes.btn} onClick={() => setError(null)}>
          OK
        </button>
      </div>
    </div>
  );
};
export default Error;
