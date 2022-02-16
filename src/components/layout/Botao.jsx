const ButtonInner = (props)=>{
    const {children, handleClick} = props
    return (
        <button 
        className="botao"
        onClick={handleClick}>{children}</button>
    )
}

export const Botao = (props) => {
    console.log(props)
    if(props.noGroup){
        return <ButtonInner {...props} />
    }
    return (
        <div className="form-group" id="divBotao">
            <button className="btn" onClick={props.handleClick}>{props.children}</button>
        </div>
    )
}