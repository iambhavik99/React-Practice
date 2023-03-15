import React, { Component } from "react";
import UpdatedComponent from './HighOrder/HOC'

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return <div>
            <div
                onMouseOver={incrementCount}>
                hovered {count} times
            </div>
        </div>
    }
}

export default UpdatedComponent(HoverCounter)