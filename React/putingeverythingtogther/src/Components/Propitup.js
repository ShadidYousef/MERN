import React from "react";
import { useState } from "react";

const Propitup = (props) =>{
    const [count , setcount] = useState(props.age );
    const [names, setnames] = useState(props.firstname);
    const addname = () =>{
        setnames(names+"s")
    }
    
    const birtherday = () =>{
        setcount(count+1)
    }

    return(
        <div>
            <h1> {props.lastname}, {names} </h1>
            <h3> {count}, {props.hiarcolor}</h3>
            <button onClick={birtherday}>Birthday</button>
            <button onClick={addname}> addname</button>

        </div>

    );

}
export default Propitup;