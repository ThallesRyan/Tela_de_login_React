export const Input = (props) => {
    

    const handleChange = event =>{
        // const {value} = event.target

        const valor = event.target.value
        
        props.setValue((valores_ateriores) =>({
            ...valores_ateriores,
            [props.name]: valor
        }))
            
        console.log("Mudou ", valor)
    }
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <input onChange={handleChange} defaultValue={props.value} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}></input>
        </div>
    )
}