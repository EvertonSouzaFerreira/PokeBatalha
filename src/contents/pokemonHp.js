export const getPokemonHp = (hp, hpFixo) => {

  // const percentages = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30]
  //   for (let i = 0; i <= percentages.length; i++) {
  //       if (hp/hpFixo <= (percentages[i] * hpFixo) / 100) {
  //           return percentages[i]
  //       }
  //   }


    const valo01 = 100 * hpFixo/100
    const valo02 = 98 * hpFixo/100
    const valo03 = 94 * hpFixo/100
    const valo04 = 92 * hpFixo/100
    const valo05 = 90 * hpFixo/100

    const valo001 = 99 * hpFixo/100
    const valo002 = 97 * hpFixo/100
    const valo003 = 95 * hpFixo/100
    const valo004 = 93 * hpFixo/100
    const valo005 = 91 * hpFixo/100

    const valo06 = 88 * hpFixo/100
    const valo07 = 86 * hpFixo/100
    const valo08 = 84 * hpFixo/100
    const valo09 = 82 * hpFixo/100
    const valo010 = 80 * hpFixo/100

    const valo006 = 89 * hpFixo/100
    const valo007 = 87 * hpFixo/100
    const valo008 = 85 * hpFixo/100
    const valo009 = 83 * hpFixo/100
    const valo0010 = 81 * hpFixo/100

    const valo011 = 78 * hpFixo/100
    const valo012 = 76 * hpFixo/100
    const valo013 = 74 * hpFixo/100
    const valo014 = 72 * hpFixo/100
    const valo015 = 70 * hpFixo/100

    const valo0011 = 79 * hpFixo/100
    const valo0012 = 77 * hpFixo/100
    const valo0013 = 75 * hpFixo/100
    const valo0014 = 73 * hpFixo/100
    const valo0015 = 71 * hpFixo/100

    const valo016 = 68 * hpFixo/100
    const valo017 = 66 * hpFixo/100
    const valo018 = 64 * hpFixo/100
    const valo019 = 62 * hpFixo/100
    const valo020 = 60 * hpFixo/100

    const valo0016 = 69 * hpFixo/100
    const valo0017 = 67 * hpFixo/100
    const valo0018 = 65 * hpFixo/100
    const valo0019 = 63 * hpFixo/100
    const valo0020 = 61 * hpFixo/100
    
    const valo021 = 58 * hpFixo/100
    const valo022 = 56 * hpFixo/100
    const valo023 = 54 * hpFixo/100
    const valo024 = 52 * hpFixo/100
    const valo025 = 50 * hpFixo/100

    const valo0021 = 59 * hpFixo/100
    const valo0022 = 57 * hpFixo/100
    const valo0023 = 55 * hpFixo/100
    const valo0024 = 53 * hpFixo/100
    const valo0025 = 51 * hpFixo/100
    
    const valo026 = 48 * hpFixo/100
    const valo027 = 46 * hpFixo/100
    const valo028 = 44 * hpFixo/100
    const valo029 = 42 * hpFixo/100
    const valo030 = 40 * hpFixo/100

    const valo0026 = 49 * hpFixo/100
    const valo0027 = 47 * hpFixo/100
    const valo0028 = 45 * hpFixo/100
    const valo0029 = 43 * hpFixo/100
    const valo0030 = 41 * hpFixo/100
  
    const valo031 = 38 * hpFixo/100
    const valo032 = 36 * hpFixo/100
    const valo033 = 34 * hpFixo/100
    const valo034 = 32 * hpFixo/100
    const valo035 = 30 * hpFixo/100 

    const valo0031 = 39 * hpFixo/100
    const valo0032 = 37 * hpFixo/100
    const valo0033 = 35 * hpFixo/100
    const valo0034 = 33 * hpFixo/100
    const valo0035 = 31 * hpFixo/100
    
    const valo036 = 28 * hpFixo/100
    const valo037 = 26 * hpFixo/100
    const valo038 = 24 * hpFixo/100
    const valo039 = 22 * hpFixo/100
    const valo040 = 20 * hpFixo/100

    const valo0036 = 29 * hpFixo/100
    const valo0037 = 27 * hpFixo/100
    const valo0038 = 25 * hpFixo/100
    const valo0039 = 23 * hpFixo/100
    const valo0040 = 21 * hpFixo/100

    const valo041 = 18 * hpFixo/100
    const valo042 = 16 * hpFixo/100
    const valo043 = 14 * hpFixo/100
    const valo044 = 12 * hpFixo/100
    const valo045 = 10 * hpFixo/100

    const valo0041 = 19 * hpFixo/100
    const valo0042 = 17 * hpFixo/100
    const valo0043 = 15 * hpFixo/100
    const valo0044 = 13 * hpFixo/100
    const valo0045 = 11 * hpFixo/100
    
    const valo046 = 8 * hpFixo/100
    const valo047 = 6 * hpFixo/100
    const valo048 = 4 * hpFixo/100
    const valo049 = 2 * hpFixo/100
    const valo050 = 0 * hpFixo/100

    const valo0046 = 9 * hpFixo/100
    const valo0047 = 7 * hpFixo/100
    const valo0048 = 5 * hpFixo/100
    const valo0049 = 3 * hpFixo/100
    const valo0050 = 1 * hpFixo/100
    
    
    switch (hp) {
      case valo01.toFixed(0):
        return 100;
      case valo001.toFixed(0):
        return 99;
      case valo002.toFixed(0):
        return 97;
      case valo003.toFixed(0):
        return 95;
      case valo004.toFixed(0):
        return 93;
      case valo005.toFixed(0):
        return 91;
      case valo0010.toFixed(0):
          return 89;
      case valo006.toFixed(0):
          return 87;
      case valo007.toFixed(0):
          return 85;
      case valo008.toFixed(0):
          return 83;
      case valo009.toFixed(0):
          return 81;
        
          case valo0011.toFixed(0):
            return 79;
          case valo0012.toFixed(0):
            return 77;
          case valo0013.toFixed(0):
            return 75;
          case valo0014.toFixed(0):
            return 73;
          case valo0015.toFixed(0):
            return 71;
            
            case valo0016.toFixed(0):
              return 69;
            case valo0017.toFixed(0):
              return 67;
            case valo0018.toFixed(0):
              return 65;
            case valo0019.toFixed(0):
              return 63;
            case valo0020.toFixed(0):
              return 61; 

              case valo0021.toFixed(0):
                return 59;
              case valo0022.toFixed(0):
                return 57;
              case valo0023.toFixed(0):
                return 55;
              case valo0024.toFixed(0):
                return 53;
              case valo0025.toFixed(0):
                return 51; 

                case valo0026.toFixed(0):
                  return 49;
                case valo0027.toFixed(0):
                  return 47;
                case valo0028.toFixed(0):
                  return 45;
                case valo0029.toFixed(0):
                  return 43;
                case valo0030.toFixed(0):
                  return 41;  
                
                  case valo0031.toFixed(0):
                    return 39;
                  case valo0032.toFixed(0):
                    return 37;
                  case valo0033.toFixed(0):
                    return 35;
                  case valo0034.toFixed(0):
                    return 33;
                  case valo0035.toFixed(0):
                    return 31;  
                  
                    case valo0036.toFixed(0):
                      return 29;
                    case valo0037.toFixed(0):
                      return 27;
                    case valo0038.toFixed(0):
                      return 25;
                    case valo0039.toFixed(0):
                      return 23;
                    case valo0040.toFixed(0):
                      return 21;
                  
                      case valo0041.toFixed(0):
                        return 19;
                      case valo0042.toFixed(0):
                        return 17;
                      case valo0043.toFixed(0):
                        return 15;
                      case valo0044.toFixed(0):
                        return 13;
                      case valo0045.toFixed(0):
                        return 11;   
                      
                        case valo0046.toFixed(0):
                          return 9;
                        case valo0047.toFixed(0):
                          return 7;
                        case valo0048.toFixed(0):
                          return 5;
                        case valo0049.toFixed(0):
                          return 3;
                        case valo0050.toFixed(0):
                          return 1;      
          
      case valo02.toFixed(0):
        return 98;
        case valo03.toFixed(0):
        return 96;
        case valo04.toFixed(0):
        return 94;
        case valo05.toFixed(0):
        return 92;
        case valo06.toFixed(0):
        return 90;
        case valo07.toFixed(0):
        return 88;
        case valo08.toFixed(0):
        return 86;
        case valo09.toFixed(0):
        return 84;
        case valo010.toFixed(0):
        return 82;
        case valo011.toFixed(0):
        return 80;
        case valo012.toFixed(0):
        return 78;
        case valo013.toFixed(0):
        return 76;
        case valo014.toFixed(0):
        return 74;
        case valo015.toFixed(0):
        return 72;
        case valo016.toFixed(0):
        return 70;
        case valo017.toFixed(0):
        return 68;
        case valo018.toFixed(0):
        return 66;
        case valo019.toFixed(0):
        return 64;
        case valo020.toFixed(0):
        return 62;
        case valo021.toFixed(0):
        return 60;
        case valo022.toFixed(0):
        return 58;
        case valo023.toFixed(0):
        return 56;
        case valo024.toFixed(0):
        return 54;
        case valo025.toFixed(0):
        return 52;
        case valo026.toFixed(0):
        return 50;
        case valo027.toFixed(0):
        return 48;
        case valo028.toFixed(0):
        return 46;
        case valo029.toFixed(0):
        return 44;
        case valo030.toFixed(0):
        return 42;
        case valo031.toFixed(0):
        return 40;
        case valo032.toFixed(0):
        return 38;
        case valo033.toFixed(0):
        return 36;
        case valo034.toFixed(0):
        return 34;
        case valo035.toFixed(0):
        return 32;
        case valo036.toFixed(0):
        return 30;
        case valo037.toFixed(0):
        return 28;
        case valo038.toFixed(0):
        return 26;
        case valo039.toFixed(0):
        return 24;
        case valo040.toFixed(0):
        return 22;
        case valo041.toFixed(0):
        return 20;
        case valo042.toFixed(0):
        return 18;
        case valo043.toFixed(0):
        return 16;
        case valo044.toFixed(0):
        return 14;
        case valo045.toFixed(0):
        return 12;
        case valo046.toFixed(0):
        return 10;
        case valo047.toFixed(0):
        return 8;
        case valo048.toFixed(0):
        return 6;
        case valo049.toFixed(0):
        return 4;
        case valo050.toFixed(0):
        return 0; 
      default:
        break;
    }
    

}