import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    post: {},
    error: ''
}
const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { post: action.post, error: '' }
        case 'FAILED':
            return { post: {}, error: action.error }
        default:
            return state;
    }
}


function DataFetching() {

    // const [post, setPost] = useState([]);
    // const [error, setErrors] = useState('');

    const [state, dispatchEvent] = useReducer(reducerFunc, initialState)

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatchEvent({ type: 'SUCCESS', post: response.data })
            })
            .catch(err => {
                dispatchEvent({ type: 'FAILED', error: 'Something went wrong.' })
            });

    }, []);


    return (
        <div>
            {state.post.title ? state.post.title : ''}
            {state.error ? state.error : ''}
        </div>
    )
}

export default DataFetching