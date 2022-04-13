import PropTypes from 'prop-types';

function Button({ children, type }) {
  return <button className={`btn btn-${type}`}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
