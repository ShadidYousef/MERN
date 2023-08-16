import React from "react";

const propitup = (props) =>{
    return(
        <div>
            <h1> {props.lastname}, {props.firstname} </h1>
            <h3> {props.age}, {props.hiarcolor}</h3>

        </div>

    );

}
export default propitup;