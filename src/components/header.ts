import { Pokemons } from "../models/pokemon";
import { getAll } from "../api/pokemon";

const Header = {
    render: async function(){
        const data = await getAll();
        console.log(data)
        const pokemon: Pokemons[]= data.data;
        console.log(pokemon);
        
        return /*html*/`
        <h2>List Pokemon</h2> 
            <div class="pokemon">
            
                ${pokemon.map(poke=>/*html*/ `
                    <div class="col">
                        <a  href="/pokemons/${poke.id}" data-navigo>
                        
                            <img src="${poke.image}" alt="">
                            <h4>${poke.name}</h4>
                            ${poke.type.map(type=>/*html*/`
                                    <span>${type.type.name}</span>
                                `).join('|')}
                        </a>
                    </div>
                `).join('')}
            </div>
            
        `
    }
}
export default Header;