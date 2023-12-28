import { SELECTED_SONG } from "../actions/actionTypes";

const initialState=null;

const songReducer = (state=initialState,action) => {

     if(action.type==SELECTED_SONG){
        return action.payload
     }
     return state;

}

export default songReducer;