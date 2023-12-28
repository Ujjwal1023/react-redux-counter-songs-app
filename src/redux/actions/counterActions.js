import {INCREASE, DECREASE,RESET} from "./actionTypes.js";


// {
//     type:INCREASE
// }


export function increase(value=1){
    return {
        type:INCREASE,
        value:value
    }   
}
export function decrease(){
    return {type:DECREASE}   
}
export function reset(){
    return {type:RESET}   
}
