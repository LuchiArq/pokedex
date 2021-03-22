
   export const SelectType=(type)=>{
        switch(type){
            case "Normal":
                return "normal"
            case "Lucha":
            case "Fighting":
                return "fighting"
            case "Volador":
            case "Flying" :
                return "flying"
            case "Veneno" :
            case "Poison" :
                return "poison"
            case "Tierra" :
            case "Ground" :
                return "ground"
            case "Roca"  :
            case "Rock" :
                return "rock"
            case "Bicho" :
            case "Bug" :
                return "bug"
            case "Fantasma":
            case "Ghost" :
                return "ghost"
            case "Acero" :
            case "Steel" :
                return "steel"
            case "Fuego" :
            case "Fire" :
                return "fire"
            case "Agua" :
            case "Water" :
                return "water"
            case "Planta" :
            case  "Grass":
                return "grass"
            case "Eléctrico" :
            case "Electric" :
                return "electric" 
            case "Psíquico":
            case "Psychic" :
                return "psychic" 
            case "Hielo" :
            case "Ice" :
                return "ice" 
            case "Dragón" :
            case "Dragon" :
                return "dragon" 
            case "Siniestro":
            case "Dark" :
                return "dark" 
            case "Hada":
            case "Fairy":
                return "fairy"
            default : return ""       
        }
    }


    

