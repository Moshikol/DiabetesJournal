import React from "react";
import { Router, Scene, Stack, ActionConst } from "react-native-router-flux";
import LoginForm from "./Components/LoginForm";
import BglstForm from "./Components/BgLst";
import NewBGFrom from "./Components/NewBG";
import SideMenu from "./Components/SideMenu";
import DashBoard from "./Components/DashBoard";

const RouterComponent = () => {
  return (
    <Router backAndroidHandler={this.onBackPress}>
      <Stack key="global" hideNavBar>
        <Stack key="auth" hideNavBar>
          <Scene
            key="login"
            hideNavBar
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Stack>

        <Stack key="BG" hideNavBar>
          <Scene key="drawer" drawer contentComponent={SideMenu}>
            <Scene
              key="bglst"
              hideNavBar={false}
              init
              component={BglstForm}
              title="BG Jouranl"
            />
            <Scene
              key="newbg"
              back
              hideNavBar={false}
              component={NewBGFrom}
              title="Add New BG"
            />
            <Scene
              key="dashboard"
              back
              hideNavBar={false}
              component={DashBoard}
              title="DashBoard"
            />
          </Scene>
        </Stack>
      </Stack>
    </Router>
  );
  onBackPress = () => {
    if (Actions.state.index === 0) {
      return false;
    }
    Actions.pop();
    return true;
  };
};

export default RouterComponent;
