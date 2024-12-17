import { useEffect } from 'react';

const TitleWrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children; // Render the child components
};

export default TitleWrapper;
