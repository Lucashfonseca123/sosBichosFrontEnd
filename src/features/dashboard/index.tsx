import React from 'react';
import { MdHome, MdPets, MdWeb } from 'react-icons/md';
import { Switch, Route } from 'react-router-dom';
import { Container, Content, Board } from './styles';
import { SideBar, Header, SideBarOption } from '../../components';
import RegisterPet from './screens/Pets/RegisterPet';
import AddNew from './screens/News/AddNew';
import Dash from './screens/Dash';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <SideBarOption
          key="dashboard"
          path="/dashboard"
          icon={MdHome}
          title="Dashboard"
        />
        <SideBarOption key="pets" path="/pets" icon={MdPets} title="Pets" />
        <SideBarOption key="news" path="/news" icon={MdWeb} title="Notícias" />
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
    </Container>
  );
};

export default Dashboard;
