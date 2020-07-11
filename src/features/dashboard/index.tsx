import React, { useState, useCallback } from 'react';
import { MdHome, MdPets, MdWeb } from 'react-icons/md';
import { Container, Content, Board } from './styles';
import { SideBar, Header, SideBarOption } from '../../components';
import RegisterPet from './screens/Pets/RegisterPet';

const Dashboard: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  const handleOpenSideBar = useCallback(() => {
    setOpenSideBar((state): boolean => {
      return !state;
    });
  }, []);

  return (
    <Container>
      <SideBar isOpen={openSideBar} onClick={handleOpenSideBar}>
        <SideBarOption isOpen={openSideBar} icon={MdHome} title="Dashboard" />
        <SideBarOption
          isOpen={openSideBar}
          isSelected
          icon={MdPets}
          title="Pets"
        />
        <SideBarOption isOpen={openSideBar} icon={MdWeb} title="Notícias" />
      </SideBar>
      <Board>
        <Header />
        <Content>
          <RegisterPet />
        </Content>
      </Board>
    </Container>
  );
};

export default Dashboard;
