import React, {
  isValidElement,
  cloneElement,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';
import menubutton from '../../assets/menubutton.svg';

const Sidebar: React.FC = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [selectedScreen, setSelectedScreen] = useState('pets');

  const handleOpenSideBar = useCallback(() => {
    setOpenSideBar((state): boolean => {
      return !state;
    });
  }, []);

  const childrenWithProps = useMemo(() => {
    const mapedChildrens = React.Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          key: child.key ? child.key : 'default',
          isOpen: openSideBar,
          isSelected: child.key === selectedScreen,
          onClick: () => {
            setSelectedScreen(child.key ? String(child.key) : 'default');
          },
        });
      }
      return child;
    });
    return mapedChildrens;
  }, [children, openSideBar, selectedScreen]);

  return (
    <Container isOpen={openSideBar}>
      <div className="header">
        <button type="button" onClick={handleOpenSideBar}>
          <img alt="MenuButton" src={menubutton} />
        </button>
      </div>
      <ul id="content">{childrenWithProps}</ul>
    </Container>
  );
};

export default withRouter(Sidebar);
