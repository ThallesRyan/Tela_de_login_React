import Card from '../components/layout/Card'
export default function Pokedex(){
    const pokemon = {
        name: 'Ditto',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
      }

      const pokemons = []

   return (
    <div className="container">
      <h1>POKEMONS</h1>

      <div>
        <div className="cards">
            <Card nome={pokemon.name} imagem={pokemon.image}>
            
            </Card>

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