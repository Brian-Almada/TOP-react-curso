import React, {Component} from "react";

class Contador2 extends Component {
    state = {
        contar: 0
    }

incrementar = () => {
    this.setState({contar: this.state.contar + 1})
}

formatoContador() {
    const { contar } = this.state
    return contar === 0 ? 'Cero' : contar;
}

    render() {
        return(
            <div>
                <span>{this.formatoContador()}</span>
                <button onClick={this.incrementar}>
                    PushMe!
                </button>
            </div>

        )
    }
}






export default Contador2