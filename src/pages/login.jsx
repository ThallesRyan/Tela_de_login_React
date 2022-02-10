import { Input } from "../components/layout/input"
import { Botao } from "../components/layout/Botao"
import {useState} from "react"

// const [param1, param2] = useState('Valor Incial')
    /*
    UseState retorna
    Param 1 Valor da minha variável
    Param 2 Função*/

const Login = () => {
    const [valores, setValores] = useState({
        email: "bananaFrita@gmail.com",
        senha:'bananaFrita123' 
    })
    // console.log("Valores:", valores)

const handleSave = _ =>{
    console.log("clicou kk", valores)
}    

    return (
        <div className="container">
            <h1>Login</h1>
            <div id="formLogin">
                <div className="form">
                    <Input
                        setValue = {setValores}
                        value ={valores.email}
                        label="Email"
                        title="E-mail"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                    />
                    <Input
                        setValue = {setValores}
                        value ={valores.password}
                        label="Senha"
                        title="password"
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Sua senha"
                    />
                    <Botao handleClick={handleSave} >Acessar</Botao>

                </div>
            </div>
        </div>
    )
}
export default Login