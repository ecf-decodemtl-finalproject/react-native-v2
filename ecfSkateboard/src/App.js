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
          apiKey: 'AIzaSyDZ-xWrweq5d0yQinnvSO1SWVrPOy4UBzg',
          authDomain: 'ecf-skateboard.firebaseapp.com',
          databaseURL: 'https://ecf-skateboard.firebaseio.com',
          storageBucket: 'ecf-skateboard.appspot.com',
          messagingSenderId: '741535944554'
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
