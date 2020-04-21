import { combineReducers } from 'redux';

import actors from './actors/reducer';
import recommendation from './recomendation/reducer';

export default combineReducers({
    actors,
    recommendation
});