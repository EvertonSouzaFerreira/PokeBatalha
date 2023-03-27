import bug from "../imgs/bug.png";
import dark from "../imgs/dark.png";
import dragon from "../imgs/dragon.png";
import electric from "../imgs/electric.png";
import fairy from "../imgs/fairy.png";
import fighting from "../imgs/fighting.png";
import fire from "../imgs/fire.png";
import flying from "../imgs/flying.png";
import ghost from "../imgs/ghost.png";
import grass from "../imgs/grass.png";
import ground from "../imgs/ground.png";
import ice from "../imgs/ice.png";
import normal from "../imgs/normal.png";
import poison from "../imgs/poison.png";
import psychic from "../imgs/psychic.png";
import rock from "../imgs/rock.png";
import steel from "../imgs/steel.png";
import water from "../imgs/water.png";

export const getPokemonType = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};