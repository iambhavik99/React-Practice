import { useReducer } from "react";

const initialState = 0;
const reducerFunc = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'reset': return initialState;
        case 'increment by 5': return state + 5;
        default: return initialState;
    }
}


export const UseReducer = () => {

    var [count, dispatch] = useReducer(reducerFunc, initialState);

    console.log("UseReducer render");

    return (
        <div>
            useReducer
            <div>
                Count : {count}
            </div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('increment by 5')}>Increment + 5 </button>
            <hr />
        </div>
    );

}