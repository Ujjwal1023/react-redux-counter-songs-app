import { createStore ,combineReducers} from "redux";
import counterReducer from "./reducer/counterReducer.js";
import songReducer from "./reducer/songReducer.js";

const rootReducer = combineReducers({
     counter:counterReducer,
     song:songReducer

    

})

const store= createStore(rootReducer)

export default store




// store => counterReducer(2, {type:  "INCREASE", value :100}) => 102