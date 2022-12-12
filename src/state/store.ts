import {createStore} from 'redux';
import launchList from './launches/reducer';

const launchStore = createStore(launchList);

export default launchStore;
