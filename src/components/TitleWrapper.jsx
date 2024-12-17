import { useEffect } from 'react';

const TitleWrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children; 
};

export default TitleWrapper;
