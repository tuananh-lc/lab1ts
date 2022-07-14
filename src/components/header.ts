import { Pokemons } from "../models/pokemon";
import { getAll } from "../api/pokemon";

const Header = {
    render: async function(){
        const data = await getAll();
        console.log(data)
        const pokemon: Pokemons[]= data.data;
        console.log(pokemon);
        
        return /*html*/`
        <div class="logo1">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="">
        </div>
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