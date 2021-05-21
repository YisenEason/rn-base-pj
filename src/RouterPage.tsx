import React from "react";
import { Lightbox, Router, Scene } from "react-native-router-flux";
import LoadingModal from "./component/modal/LoadingModal";
import FirstPage from "./component/page/FirstPage";
import LoginPage from "./component/page/Login/LoginPage";

export default class RouterPage extends React.Component {
  render () {
    return (
      <Router>
        <Lightbox>
          <Scene key="root" hideNavBar >
            <Scene key="FirstPage" component={FirstPage} />
            <Scene key="LoginPage" component={LoginPage} initial />
          </Scene>
          {/* 弹窗 */}
          <Scene key="LoadingModal" component={LoadingModal} />
        </Lightbox>
      </Router>
    )
  }
}