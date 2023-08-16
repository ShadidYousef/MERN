import React, { useState } from 'react';
import axios from 'axios';
const Pokemonapi = () => {
    const [pokemons, setPokemons] = useState([]);
    const Pokemon = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            console.log(response.data);
            return response.json()
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            setPokemons(response.results)
            console.log(response)

        }).catch(err=>{
            console.log(err)
        });
    }

    return (
        <div>
            <h1> Hello World!! </h1>
            <button onClick={Pokemon}>Show Pokemons</button>
            {pokemons.map((value,i) => <> <p key={i}> {value.name}</p>  </>  ) }

        </div>
    )
}
    
export default Pokemonapi;