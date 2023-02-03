import React, { useEffect, useRef, useState } from "react";
import { ICharacter, IReqRestApiCharacters } from "../interfaces/IReqRestApiCharacters";
import { ReqRestApi } from "../API/ReqRestApi";
import { getEnvironmentData } from "worker_threads";

const DEFAULT_PAGE = 1;

export const useCharacter = () => {
    
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const currentPage = useRef(DEFAULT_PAGE);
 
    const getData = async() => {
    
        const response = await ReqRestApi.get<IReqRestApiCharacters>(
            '/character', {params:{page:currentPage.current}}).then(
            ({data}) => data
        ).catch(console.log); 
        console.log(response);
        response ? setCharacters(response.results) : setCharacters([]);
    }

    useEffect(()=> {getData();}, []);

    const next = () =>{
        currentPage.current++;
        getData();
    }
    const before = () => {
        currentPage.current--;
        getData();
    }
    return{
        characters,before,next
    }
    
}

