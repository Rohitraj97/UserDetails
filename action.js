import * as types from "./actionTypes"
import axios from "axios"


const getusers=(username)=>(dispatch)=>  {
   dispatch({type:types.GET_USER_REQUEST})
   axios.get(`https://api.github.com/users/${username}`,{
       username:username
   })
   .then((r)=> dispatch({type:types.GET_USER_SUCCESS,payload:r.data}))
   .catch((e)=>dispatch({type:types.GET_USER_FAILURE}))
}


export { getusers }