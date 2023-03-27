export const getPokemonStatos = (statos) => {
    
    // switch (statos) {
    //   case statos === 25:
    //     return 'fraco';
    //   case statos <50:
    //     return 'medio';
    //   case statos <75:
    //     return 'Bom';
    //   case statos > 75:
    //     return 'Muito bom';
      
    //   default:
    //     return 'sem informacao';
    // }

    if (statos <= 25){
        return 'red'
    }
     else if (statos <= 50){
        return 'orange'
    }
    else if (+statos <= 75){
        return 'yellow'
    }
    else{
        return 'green'
    }
  };