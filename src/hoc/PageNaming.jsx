import React, { useEffect } from 'react';

const PageNaming = (Component, title = 'NYT') => {
  function PageNaming(props) {
    useEffect(() => {
      document.title = title;
    }, []);
    return <Component {...props} />;
  }
  return PageNaming;
};

export default PageNaming;
