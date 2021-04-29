import React from "react";
import { Lightbox, Router, Scene } from "react-native-router-flux";
import LoadingModal from "./component/modal/LoadingModal";
import FirstPage from "./component/page/FirstPage";
import TwoPage from "./component/page/TwoPage";

export default class RouterPage extends React.Component {
  render () {
    return (
      <Router>
        <Lightbox>
          <Scene key="root" hideNavBar >
            <Scene key="FirstPage" component={FirstPage} initial />
            <Scene key="TwoPage" component={TwoPage} />
          </Scene>
          <Scene key="LoadingModal" component={LoadingModal} />
        </Lightbox>
      </Router>
    )
  }
}