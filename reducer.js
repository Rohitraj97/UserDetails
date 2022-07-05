import * as types from "./actionTypes"
const initialState={
    user:[],
    isloading:false,
    isError:false
}
 export const getreducer=(state=initialState,action)=>{
  const {type,payload}=action
    switch(action.type)
    {
       case types.GET_USER_REQUEST:
        return {
            ...state,

            user:payload,
            isloading:true,
            isError:true
        }


        case types.GET_USER_SUCCESS:
            return {
                ...state,
    
                user:payload,
                isloading:false,
                isError:false
            }

            case types.GET_USER_FAILURE:
                return {
                    ...state,             
                    isloading:false,
                    isError:true
                }        

        default:return state
    }
 }