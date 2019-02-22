import React, { Component } from 'react';
import History from '../History/History'

class EnterNumber extends Component {
    state={
        toAdd: 0,
        numDis:[],
    }
handleChangeFor=(event)=>{
this.setState({
    ...this.state,
    toAdd: event.target.value,
})
}
handleSubmitUp=(event)=>{
    event.preventDefault()
    this.props.setTotalUp(this.state.toAdd)
    this.setState({
        toAdd: '',
        numDis: [...this.state.numDis, this.state.toAdd]
        }
    )}
    handleSubmitDown = (event) => {
        let negNum=-this.state.toAdd
        event.preventDefault()
        this.props.setTotalDown(negNum)
        this.setState({
            toAdd: '',
            numDis: [...this.state.numDis, negNum]
        }
        )
    }

    render() {
        return (
            <div >
                <button onClick={this.handleSubmitUp}>Up</button>
                    <input
                        placeholder="Value"
                        type="number"
                        onChange={this.handleChangeFor}
                        value={this.state.toAdd}
                   />
                <button onClick={this.handleSubmitDown}>Down</button>
               
               
                    <ul>
          {this.state.numDis.map(num => (<History num={num}/>))}
                </ul>
            </div>
        );
    }
}

export default EnterNumber;
