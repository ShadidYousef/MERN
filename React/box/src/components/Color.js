import React from 'react';
import {useState} from 'react';
    
const Color = (props) => {
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState("");
   
    const createColor = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        setColors(colors.concat(color));

       
    };
    return (
        <div>
            <div>
            <form onSubmit={ createColor }>
                <label>color: </label>
                <input type="text" onChange={ (e) => setColor(e.target.value) } />
                <button type='submit'> submit</button>
            </form>
            </div>
         



            <div style={{
            display: 'flex'
        }}>

        
            
                {colors.map((item, i) =>
                    <div
                    style={{
                            backgroundColor: item,
                            width: '100px',
                            height: '100px'
                        }}
                        key={i}></div>)}
            
        
                        </div>





        </div>
    )
}
    









export default Color;