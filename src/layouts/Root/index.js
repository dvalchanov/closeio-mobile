import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import reducers from 'io/modules';
import {setStore} from 'io/store';

import App from 'io/layouts/App';

const {
  StatusBar,
} = React;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default React.createClass({
  render() {
    StatusBar.setBarStyle(1);

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  },
});

setStore(store);
