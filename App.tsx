/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {fetchPlaces, init} from './src/helpers/db';
import {Providers} from './src/Providers';

declare const global: {HermesInternal: null | {}};
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import placesReducer from './src/store/places-reducers';
import {loadFromDB} from './src/store/places-actions';

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
init()
  .then(async () => {
    // const result = await fetchPlaces();
    await store.dispatch(loadFromDB());
    // console.log(result.rows._array);
  })
  .catch((err) => {
    console.log('errrr');
  })
  .finally(() => {
    console.log('finally');
    // fetchPlaces().then(res=>console.log('fetchPlaces',res))
  });
const MainApp = () => {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
};

export default MainApp;
