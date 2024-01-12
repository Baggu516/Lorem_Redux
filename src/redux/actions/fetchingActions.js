import { STARTING_REQUEST,FAILURE_REQUEST,DATA_FETCH } from "./actionType";
import axios from "axios";

export const starting_request=()=>{
    return{
        type:STARTING_REQUEST
    }
}
export const data_fetch=(data)=>{
    return{
        type:DATA_FETCH,
        payload:data
    }
}
export const failure_request=(err)=>{
    return{
        type:FAILURE_REQUEST,
        payload:err
    }
}
export const fetchposts=()=>{
    return (dispatch)=>{
        dispatch(starting_request)
        axios.get('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1',{
            headers:
            { 
                'X-Api-Key': 'oZveMcPIdD2dm+T9QVtZBA==YotjlY7pEcHyoEvM'
            }
        }).then(res=>dispatch(data_fetch(res.data))).catch((err)=>dispatch(failure_request(err.message)))  
    }
}