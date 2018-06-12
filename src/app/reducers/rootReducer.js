import {combineReducer} from 'redux'
import testReducer from './testReducer';


const rootReducer = combineReducer({
    test:testReducer
})

export default rootReducer