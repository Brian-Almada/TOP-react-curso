import React, {Component} from "react";
import Contador from "./Contador";

class Contadores extends Component {
    state = {
        contadores: [
            {id:1, value:0},
            {id:2, value:4},
        ]
    };

    render() {
        return(
            <div>
                {this.state.contadores.map(contador =>
                    <Contador key={contador.id} value={contador.value}/>)}
            </div>
        )
    }
}

export default Contadores