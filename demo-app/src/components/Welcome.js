import React, { Component } from 'react';
import './Welcome.css'

export class Welcome extends Component {

    users = ['admin', 'user', 'guest'];

    constructor() {
        super()
        this.state = {
            message: 'New features'
        }
    }

    changeMessage = () => {
        this.setState({
            message: 'Version - v1.0.0 Released on 14th march 2023'
        });
    }

    render() {
        return <div>
            <div className='heading'>Welcome {this.props.name}</div>
            <div>{this.state.message}</div>
            <button
                onClick={() => this.changeMessage()}>
                view more
            </button>
            <div>{this.users.join(",")}</div>
        </div>
    }
}