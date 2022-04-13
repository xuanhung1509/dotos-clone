import PropTypes from 'prop-types';

function Card({ children, height }) {
  return (
    <div className='card' style={{ height }}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
