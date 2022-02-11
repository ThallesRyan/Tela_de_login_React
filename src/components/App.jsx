import react from "react"
import "../assets/styles.css"
import "../assets/form.css"
import Login from "../pages/login"
import Pokedex from "../pages/pokedex"
//import 'bootstrap/dist/css/bootstrap.min.css'
 
const App = () => {
    const logado = localStorage.getItem('User')
    console.log(JSON.parse(logado))

    if(logado){
        return(
            <Pokedex />
        )
    }
    return (
        <div>
            <Login></Login>
        </div>
    )
}

export default App