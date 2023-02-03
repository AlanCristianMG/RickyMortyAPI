import React from "react";
import Contador from "./Contador";
import { useState } from "react";
import { ReqRestApi } from "../API/ReqRestApi";
import { useCharacter } from "./useCharacter";
import { Personajes } from "./Personajes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { EverydayTypes, FuncionSuma } from "../typescript/EverydayTypes";
import { stripVTControlCharacters } from "util";
import { Tarjeta } from "./Tarjeta";

const MainHooks = ()=>{


    return(

        <div>
            <h1>Welcome to MainHooks</h1>
            <hr />
            <Contador/>
            <EverydayTypes/>
            <FuncionSuma/>
            <Personajes/> 
        </div>
    )
}
export default MainHooks;