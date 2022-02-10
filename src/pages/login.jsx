import { Input } from "../components/layout/input"
import { Botao } from "../components/layout/Botao"
import {useState} from "react"

const Login = () => {
    let variavel = 'Meu nome é Thalles'

    
    // const [param1, param2] = useState('Valor Incial')
    /*
    UseState retorna
    Param 1 Valor da minha variável
    Param 2 Função*/
    const [email, setEmail] = useState()
    console.log("Email: "+ email)

    const [password, setPassword] = useState()
    console.log("Senha: "+ password)

    return (
        <div className="container">
            <h1>Login</h1>
            <div id="formLogin">
                <div className="form">
                    <Input
                        setValue ={setEmail}
                        label="Email"
                        title="E-mail"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                    />
                    <Input
                        setValue = {setPassword}
                        label="Senha"
                        title="password"
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Sua senha"
                    />
                    <Botao >Acessar</Botao>

                </div>
            </div>
        </div>
    )
}
export default Login