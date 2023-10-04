import React, { Component } from "react";

class Contador extends Component {
    state = {
        value:this.props.value
    };

incremento = () => {
    this.setState({value: this.state.value + 1});
}

formatoContar() {
    const {value} = this.state;
    return value === 0 ? "Cero" : value;
}

cambiarClase() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "primary" : "danger";
    return classes;
}

    render() {
        return (
            <div>
                <span className={this.cambiarClase()}>{this.formatoContar()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.incremento}>
                    Increment
                </button>
            </div>
        )
    }
}

export default Contador