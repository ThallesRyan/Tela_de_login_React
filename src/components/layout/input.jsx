export const Input = (props) => {
    

    const handleChange = event =>{
        // const {value} = event.target
        const valor = event.target.value
        console.log("Mudou ", valor)

        props.setValue(valor)
    }
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <input onChange={handleChange} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}></input>
        </div>
    )
}