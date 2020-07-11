import React from 'react';
import { MdHome, MdPets, MdWeb, MdCardGiftcard } from 'react-icons/md';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Content, Board } from './styles';
import { SideBar, Header, SideBarOption } from '../../components';
import RegisterPet from './screens/Pets/RegisterPet';
import AddNew from './screens/News/AddNew';
import Dash from './screens/Dash';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <SideBar>
          <SideBarOption
            key="dashboard"
            path="/dashboard"
            icon={MdHome}
            title="Dashboard"
          />
          <SideBarOption key="pets" path="/pets" icon={MdPets} title="Pets" />
          <SideBarOption
            key="news"
            path="/news"
            icon={MdWeb}
            title="Notícias"
          />
          <SideBarOption
            key="adoptions"
            path="/adoptions"
            icon={MdCardGiftcard}
            title="Adoções"
          />
        </SideBar>
        <Board>
          <Header />
          <Content>
            <Switch>
              <Route path="/dashboard" component={Dash} />
              <Route path="/news" component={AddNew} />
              <Route path="/pets" component={RegisterPet} />
            </Switch>
          </Content>
        </Board>
      </BrowserRouter>
    </Container>
  );
};

export default Dashboard;
