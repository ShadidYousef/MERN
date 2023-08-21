import React from "react";
import { useParams } from "react-router";

const Realhome = () => {
    const {something } = useParams();
    return (
      <div>
        {
            isNaN(something)?(<h1>The word is {something}</h1>):
            (<h1>The number is {something}</h1>)
        }
    
      </div>
    );
  };
  export default Realhome;