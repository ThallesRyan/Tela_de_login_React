export function coresCard(props){
let cores = {backgroundColor: "blue"}
// console.log(props)
let corte = props.url.split('/')
let id = corte[6]
console.log(id)
if(id % 2 == 0){
    cores.backgroundColor = "green"
}
return cores
}