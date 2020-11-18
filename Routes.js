import React from "react"
import { Router, Scene } from 'react-native-router-flux'
import Beranda from "./components/Home"

const Routes = () => {
    <Router>
      <Scene key="root">
        <Scene key='Home' component={Beranda} title='Beranda' initial={true} />
      </Scene>
    </Router>
  }
  export default Routes;