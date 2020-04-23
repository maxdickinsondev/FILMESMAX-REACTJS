import { combineReducers } from 'redux';

import actors from './actors/reducer';
import recommendation from './recomendation/reducer';
import title from './search/reducer';

export default combineReducers({
    actors,
    recommendation,
    title
});