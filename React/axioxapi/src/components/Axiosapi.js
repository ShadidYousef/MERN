import React, { useState } from 'react';
import axios from 'axios';

const Axiosapi = () => {
    const [pokemons, setPokemons] = useState([]);
    const Pokemon = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            console.log(response.data);
            setPokemons(response.data.results)
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response)

        }).catch(err=>{
            console.log(err)
        });
    }

    return (
        <div>
            <h1> Hello World!! </h1>
            <button onClick={Pokemon}>Show Pokemons</button>
            {pokemons.map((value) => <> <p > {value.name}</p>  </>  ) }

        </div>
    )
}
    
export default Axiosapi;