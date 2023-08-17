import { useParams } from "react-router";

const Realnothome = (props) => {
    const {something } = useParams();
    const {color } = useParams();
    const {backgroud } = useParams();
    return (
      <div>
        {
            isNaN(something)?(<h1 style={{color : color, backgroundColor : backgroud}}>The word is {something}</h1>):
            (<h1 style={{color : color, backgroundColor : backgroud}}>The number is {something}</h1>)
        }
    
      </div>
          
  
    );
  }
  export default Realnothome;