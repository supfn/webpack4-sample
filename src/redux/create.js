import {createStore} from 'redux';
import reducers from './modules/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function create() {
  // let store = createStore(reducers, composeWithDevTools());
  let store = createStore(reducers);
  return store;
}
