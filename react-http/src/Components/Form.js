import axios from "axios";
import { Component } from "react";

export class Form extends Component {

    constructor() {
        super()
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFormSave = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        return <form>
            <div>
                <input
                    name="userId"
                    value={this.state.userId}
                    onChange={this.changeHandler} />
            </div>
            <div>
                <input
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler} />
            </div>
            <div>
                <input
                    name="body"
                    value={this.state.body}
                    onChange={this.changeHandler} />
            </div>

            <button
                type="button"
                onClick={this.onFormSave}>
                Save
            </button>
        </form>
    }

}