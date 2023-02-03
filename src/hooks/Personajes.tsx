import React from "react";
import { useCharacter} from "./useCharacter";
import {Tarjeta} from "./Tarjeta";
import { ReqRestApi } from "../API/ReqRestApi";
import { render } from "@testing-library/react";

export const Personajes = () =>{
    const {characters, next, before} = useCharacter();
    return(
    <>
        <div style={{
            margin:20,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"row",
            flexWrap:"wrap",
        }}>
        
        {
        characters.map(character =><div>
            <Tarjeta key={character.id} {...character} />
        </div> 
        )
        }
        </div>
        <div style={{
            margin:50,
            display:"flex",
            flexDirection:"row",
            alignSelf:"center",
            justifyContent:"center"
        }}>
            <button style={{margin:10}} type="button" className="btn btn-primary">Primary</button>
            <button style={{margin:10}} type="button" className="btn btn-danger">Danger</button>
        </div>
        
    </>  
    )
}

