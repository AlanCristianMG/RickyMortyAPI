import React from "react";
import axios from "axios";

export const ReqRestApi = axios.create({
    baseURL: `https://rickandmortyapi.com/api`
});