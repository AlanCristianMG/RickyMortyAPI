import React from "react";
import { ICharacter } from "../interfaces/IReqRestApiCharacters";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Tarjeta = (character:ICharacter) =>{
    return(
        <>
            <div className='card m-3' style={{
                width: '18rem'
            }}>
                <img src={character.image} className="card-img-top" alt={character.name} />
                <div className='card-body'>
                    <p className='card-text'>
                        {character.name}
                    </p>
                </div>
            </div>
        </>
    )
}