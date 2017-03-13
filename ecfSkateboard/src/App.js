import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './redux';
import Router from './Router';

class App extends Component {
  componentWillMount() {
      const config = {
          apiKey: ,
          authDomain: ,
          databaseURL: ,
          storageBucket: ,
          messagingSenderId: 
      };

      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
