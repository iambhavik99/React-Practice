import { Component } from "react";
import axios from 'axios';

export class PostList extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.error(error);
                this.setState({ errorMessage: 'Error while receiving data' })
            })
    }

    render() {
        return <div>Post list component:
            <div>
                {
                    this.state.posts.length > 0 ?
                        this.state.posts.map(x => <div key={x.id}>{x.title}</div>) :
                        null
                }
                {
                    this.state.errorMessage
                }
            </div>
        </div>;
    }
}