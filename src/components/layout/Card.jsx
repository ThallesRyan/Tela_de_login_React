import React from "react";
import "./Card.css"
import {coresCard} from "../../utils/coresCard"
export default (props) => {
    return (
        <div>

            {/* <div className="Card">
            <div className="nome">{props.nome}</div>
            <div className="imagem"><img src={props.imagem}></img></div>    
            </div> */}

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front" style={coresCard(props)}>
                        <div className="nome">{props.nome}</div>
                        <div className="divImagem"><img className="imagem" src={props.imagem}></img></div>
                    </div>
                    <div className="flip-card-back">
                        <div className="habilidades"><span>Habilidades</span> {props.habilidades}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}