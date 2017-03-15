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
          apiKey: 'AIzaSyBNJI5TpJil98l7tXl5B6el_pnhzgXQOTk',
          authDomain: 'ecf-skateboard-4b2f0.firebaseapp.com',
          databaseURL: 'https://ecf-skateboard-4b2f0.firebaseio.com',
          storageBucket: 'ecf-skateboard-4b2f0.appspot.com',
          messagingSenderId: '1056259849416'
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
