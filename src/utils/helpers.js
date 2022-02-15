

export function getImagem (url){
    url = url.split('/')
    let id_imagem = url[6] 
     let base_imagem
    return  base_imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_imagem}.svg`
}
