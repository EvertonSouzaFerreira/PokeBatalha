import bulbasaur from '../imgs/pokemons/bulbasaur.png'
import ivysaur from '../imgs/pokemons/ivysaur.png'
import venusaur from '../imgs/pokemons/venosaur.png'
import charmander from '../imgs/pokemons/charmander.png'
import charmeleon from '../imgs/pokemons/charmeleon.png'
import charizard from '../imgs/pokemons/charizard.png'
import squirtle from '../imgs/pokemons/squirtle.png'
import wartortle from '../imgs/pokemons/wartortle.png'
import blastoise from '../imgs/pokemons/blastoise.png'
import caterpie from '../imgs/pokemons/caterpie.png'
import metapod from '../imgs/pokemons/metapod.png'
import butterfree from '../imgs/pokemons/buterfree.png'
import weedle from '../imgs/pokemons/weedle.png'
import kakuna from '../imgs/pokemons/kakuna.png'
import beedrill from '../imgs/pokemons/beedrill.png'
import pidgey from '../imgs/pokemons/pidgey.png'
import pidgeotto from '../imgs/pokemons/pidgeotto.png'
import pidgeot from '../imgs/pokemons/pidgeot.png'
import rattata from '../imgs/pokemons/rattata.png'
import raticate from '../imgs/pokemons/raticate.png'
import spearow from '../imgs/pokemons/spearow.png'


export const getImagenByName = (name) => {
    switch (name) {
        case 'bulbasaur':
            return bulbasaur;
        case 'ivysaur':
            return ivysaur;
        case 'venusaur':
            return venusaur;
        case 'charmander':
            return charmander;
        case 'charizard':
            return charizard;
        case 'charmeleon':
            return charmeleon;
        case 'squirtle':
            return squirtle;
        case 'wartortle':
            return wartortle;
        case 'blastoise':
            return blastoise;
        case 'caterpie':
            return caterpie;
        case 'metapod':
            return metapod;
        case 'butterfree':
            return butterfree;
        case 'weedle':
            return weedle;
        case 'kakuna':
            return kakuna;
        case 'beedrill':
            return beedrill;
        case 'pidgey':
            return pidgey;
        case 'pidgeotto':
            return pidgeotto;
        case 'pidgeot':
            return pidgeot;
        case 'rattata':
            return rattata;
        case 'raticate':
            return raticate;
        case 'spearow':
            return spearow;
        default:
            break;
    }
}