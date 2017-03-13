import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ControlScreen from './components/ControlScreen';
import LoginForm from './components/LoginForm';
import TripChecker from './components/TripChecker';
import logo from './assets/logo.jpg';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene
          key='login'
          component={LoginForm}
          title='Please Login'
          initial
        />
      </Scene>
      <Scene key='main'>
        <Scene
          key='ControlScreen'
          component={ControlScreen}
          rightTitle='Trip'
          title='ECF'
          onRight={() => Actions.TripChecker()}
          initial
        />
        <Scene
          key='TripChecker'
          component={TripChecker}
          title='Trip Checker'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
