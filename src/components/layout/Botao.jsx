

export const Botao = (props) => {
    console.log(props)
    return (
        <div className="form-group" id="divBotao">
            <button className="btn" onClick={props.handleClick}>{props.children}</button>
        </div>
    )
}