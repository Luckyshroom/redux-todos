import counter from './counter'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {combineReducers} from 'redux'

export default combineReducers({
    counter,
    todos,
    visibilityFilter
})
