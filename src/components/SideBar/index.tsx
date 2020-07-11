import React from 'react';
import { Container } from './styles';
import menubutton from '../../assets/menubutton.svg';

interface IProps {
  isOpen: boolean;
  onClick: VoidFunction;
}

const Sidebar: React.FC<IProps> = ({ isOpen, children, onClick }) => {
  return (
    <Container isOpen={isOpen}>
      <div className="header">
        <button type="button" onClick={onClick}>
          <img alt="MenuButton" src={menubutton} />
        </button>
      </div>
      <ul id="content">{children}</ul>
    </Container>
  );
};

export default Sidebar;
