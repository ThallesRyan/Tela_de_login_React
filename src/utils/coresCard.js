const axios = require('axios')

export  function coresCard(props) {
    const base_url = 'https://pokeapi.co/api/v2/'
    var cores = { backgroundColor: "blue" }
    // console.log(props)
    let corte = props.url.split('/')
    let id = corte[6]
    // console.log(id)

  

    
    return cores
     
}


