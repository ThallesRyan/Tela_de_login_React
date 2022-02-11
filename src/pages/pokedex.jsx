export default function Pokedex(){
    const pokemon = {
        name: 'Ditto',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
      }

      const pokemons = []

   return (
    <div className="container">
      <h1>POKEMONS</h1>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card">
                <img src={pokemon.image} alt={pokemon.name} title={pokemon.name}/>
                <h2>Nome do Pokemon</h2>
                
          </div>
        </div>
      </div>
    </div>
  )
}