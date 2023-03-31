import React, { useReducer } from "react";

const initialState = {
    counter: 0
}
const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export function CountReducer() {

    const [count, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <React.Fragment>
            <div>
                {count.counter}
            </div>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </React.Fragment>
    )

}