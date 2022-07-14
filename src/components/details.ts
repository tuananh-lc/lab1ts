import { get } from "../api/pokemon";
import { Pokemons } from "../models/pokemon";

const PokemonDetail = {
    render: async function(id){
        const {data} = await get(id);
        console.log(data);
        
        const pokemon: Pokemons[]= id;
        console.log(pokemon);
        return `
        <div class="container">
        <div class="bgdetail">
        <img src=" ${data.image}" alt="">
        <h4> Name: ${data.name} </h4>
        <h4> Type: ${data.type?.[0].type.name }       ${data.type?.[1] ? '| ' + data.type?.[1].type.name : ''} </h4>
        <h4> Abilities:
        ${data.abilities.map(abi=>/*html*/ `
         ${abi.ability.name} 
        `).join('|')}
        </h4>
        <h4> Weight: ${data.weight} </h4>
        <p><a href="http://localhost:3000/"> Go back..</a></p>
        </div>
        </div>
        `
    }
}

export default PokemonDetail;