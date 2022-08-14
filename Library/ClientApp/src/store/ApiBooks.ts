import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';
import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Content-type": "application/json"
    }
});
//API method add


export default interface IBooksData {
    id?: any | null,
    name: string,
    genre: string,
    author: {
        id?: any | null,
        name: string,
        lName: string,
        mName: string
    },
    releseDate: Date
}


