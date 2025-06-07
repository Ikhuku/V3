'use client';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <section className="min-h-screen">{children}</section>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
