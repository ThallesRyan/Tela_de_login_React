import Card from '../components/layout/Card'
export default function Pokedex() {
  const pokemon = {
    name: 'Ditto',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    abilities: [
      {
        ability: {
          name: "Limber",
          url: "https://pokeapi.co/api/v2/ability/7/"
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: "Imposter",
          url: "https://pokeapi.co/api/v2/ability/150/"
        },
        is_hidden: true,
        slot: 3
      }
    ]

  }

  const pokemons = []

  return (
    <div className="container">
      <h1>POKEMONS</h1>

      <div>
        <div className="cards">
          <Card nome={pokemon.name} imagem={pokemon.image} habilidades={pokemon.abilities[0].ability.name}></Card>

          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>


        </div>
      </div>
    </div>
  )
}