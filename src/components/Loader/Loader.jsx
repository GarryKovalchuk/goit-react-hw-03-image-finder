import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <RotatingLines
        strokeColor="#3f51b590"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

RotatingLines.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  strokeWidthSecondary: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  wrapperStyle: PropTypes.object.isRequired,
};
