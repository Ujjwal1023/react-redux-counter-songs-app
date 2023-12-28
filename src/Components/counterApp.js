import React,{useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import {increase,decrease,reset} from "../redux/actions/counterActions.js"

const counterApp = () => {

    const count=useSelector((state) =>state.counter)

    const dispatch = useDispatch();

    return (

       <div>
        <h1>Counter app</h1>
     <h1>{count}</h1>
    <button onClick={()=>dispatch(increase())}>Increase</button>
    <button  onClick={()=>dispatch(decrease())}>Decrease</button>
    <button  onClick={()=>dispatch(reset())}>Reset</button>
       </div>

    )
}

export default counterApp;