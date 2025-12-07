import { useReducer } from "react";

type Dispatch = {
    value: string;
    type: string
}
const reducer = (state: any, dispatcher: Dispatch) => {
    switch (dispatcher.type) {
        case 'input':{
            return {...state, value: dispatcher.value};
        }
        break;
        default:
            return state;
    }
}

export const UseReducerComp = () => {

    const [state, dispatch] = useReducer(reducer, {value: 'hello',type: ''});

    return <>
    <input type="text" onKeyDown={(e)=>{if(e.key === 'Enter'){
        console.log("Enter pressed: ", e.currentTarget.value);
        dispatch({type: 'input', value: e.currentTarget.value})
    }}} />
    <br />
    <hr />
    value: {state.value}

    </>
}