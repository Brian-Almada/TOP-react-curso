import React, { Component } from "react";

class Contador extends Component {
    state = {
        contar: 0
    }

incremento = () => {
    this.setState({contar: this.state.contar +1})
    const {contar} = this.state;

    if (contar > 20) {
        return contar === 0
    }

}

formatoContar() {
    const {contar} = this.state;
    return contar === 0 ? "Cero" : contar;
}

    render() {
        return (
            <div>
                <span>{this.formatoContar()}</span>
                <button onClick={this.incremento}>
                    Increment
                </button>
            </div>
        )
    }
}

export default Contador