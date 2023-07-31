import axios from "axios";
import { GET_DATA_FAILED, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constants/dataConatant"


export const getAllData = () => async (dispatch)=>{
    dispatch({type: GET_DATA_REQUEST});
    try {
        const res = await axios.get("http://web-api-tht-env.eba-kcaa52ff.us-east-1.elasticbeanstalk.com/api/dev/products");
        dispatch({type: GET_DATA_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type: GET_DATA_FAILED, payload: error.message})
    }
}