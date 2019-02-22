import React, { Component } from 'react';
import EnterNumber from '../EnterNumber/EnterNumber'

class CurrentTotal extends Component {
    state={
        total: 0,
    }
    setTotalUp=(total)=>{
        this.setState({
            total: this.state.total + parseInt([total]),
        })
    }
    setTotalDown = (total) => {
        this.setState({
            total: this.state.total + parseInt([total]),
        })
    }
    render() {
        return (
            <div >
                <h1>{this.state.total}</h1>
<EnterNumber setTotalUp={this.setTotalUp} setTotalDown={this.setTotalDown}/>

            </div>
        );
    }
}

export default CurrentTotal;
