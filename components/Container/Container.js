import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto px-4 xl:px-20 py-4">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
