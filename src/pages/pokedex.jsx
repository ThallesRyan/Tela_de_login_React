import Card from '../components/layout/Card'
import react, { useEffect } from "react"
import reactUseState, { useState } from 'react'
import {getImagem} from  '../utils/helpers' 
import {Botao} from "../components/layout/Botao"
export default function Pokedex() {

  const [pokemons, setPokemons] = useState([])//Array de pokemons
  let baseImagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  useEffect(() => {

    async function chamarPokemon(){
      try{
        const promise = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        const resultado = await promise.json()

        setPokemons(resultado.results)
        console.log(resultado.results)
      } catch(error){
        console.log(console.log(error))
      }
    } chamarPokemon()

  
  }, [])

  // const getImagem = url =>{
  //   let id_imagem 
    
    
  //   let imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_imagem}.svg`
  //   return imagem
  // }

  
   

  return (
    <div className="container">
      <h1>POKEMONS</h1>
  
      <div>
        <div className="cards">
          {/* <Card nome={pokemon.name} imagem={pokemon.image} habilidades={pokemon.abilities[0].ability.name}></Card> */}
  
          {
            pokemons.map((pokemon , index) =>(
              <Card nome={pokemon.name} imagem={getImagem(pokemon.url)} url={pokemon.url} key={index} />
            ))
          }
        </div>
      </div>
      <div className='divBotao'>
          <Botao noGroup className="botaoVoltar">Voltar</Botao>
          <Botao noGroup={true}>Avançar</Botao>
      </div>
    </div>
  )
  }









  // const pokemon = {
  //   name: 'Ditto',
  //   image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
  //   abilities: [
  //     {
  //       ability: {
  //         name: "Limber",
  //         url: "https://pokeapi.co/api/v2/ability/7/"
  //       },
  //       is_hidden: false,
  //       slot: 1
  //     },
  //     {
  //       ability: {
  //         name: "Imposter",
  //         url: "https://pokeapi.co/api/v2/ability/150/"
  //       },
  //       is_hidden: true,
  //       slot: 3
  //     }
  //   ]


/*HOOK */
// useEffect(() =>{
//   //Quando ler a página

// }, [{/*Observa uma dependencia}*/}]


// useEffect(() => { {/*Quando ler a página*/ } }, [{/*Observa uma dependencia}*/ }])

// useEffect(() => {{/*Quando ler a página*/ 
//   const interval = setInterval(() =>{
//    const data = new Date
//    console.log(data)
//   }, 1000)
// }}, [{/*Observa uma dependencia}*/}])






