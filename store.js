import {combineReducers,  legacy_creatStore,applyMiddleware} from "redux";
import { createStore } from "redux";  
import { getreducer } from "./Redux/reducer";
import thunk from "redux-thunk"
const rootreducer = combineReducers({
     getreducer:getreducer
     
    
})
const store = createStore(rootreducer,applyMiddleware(thunk))
 


console.log("store",store.getState())

 

  export default store