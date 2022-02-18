const axios = require('axios')

export function coresCard(props) {
    const base_url = 'https://pokeapi.co/api/v2/'
    let cores
    // console.log(props)
    let corte = props.url.split('/')
    let id = corte[6]
    // console.log(id)
     if(id % 2 == 0){
        cores = { backgroundColor: "green",}
     }else if(id % 2 == 1){
        cores = {backgroundColor: "blue"}
     }
        

    
    return cores
     
}


