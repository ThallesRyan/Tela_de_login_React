import { Input } from "../components/layout/input"
import { Botao } from "../components/layout/Botao"

const Login = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <div id="formLogin">
                <div className="form">
                    <Input
                        label="Email"
                        title="E-mail"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Seu email"
                    />
                    <Input
                        label="Senha"
                        title="password"
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Sua senha"
                    />

                   
                   <Botao>Acessar</Botao>
                   
                </div>
            </div>
        </div>
    )
}
export default Login