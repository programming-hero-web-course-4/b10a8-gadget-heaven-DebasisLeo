import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = '';

    switch (location.pathname) {
      case '/':
        pageTitle = 'Gadgets | Gadget Heaven';
        break;
      case '/r/stat':
        pageTitle = 'Statistics | Gadget Heaven';
        break;
      case '/rot/dash':
        pageTitle = 'Dashboard | Gadget Heaven';
        break;
      default:
        pageTitle = 'Gadget Heaven';
        break;
    }

    document.title = pageTitle;
  }, [location]);

  return null;
};

export default DynamicTitle;
