import React, { Component } from 'react';
import History from '../History/History'

class EnterNumber extends Component {
    state={
        toAdd: 0,
        numDis:[],
        numToD: 0,
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
        ...this.state,
        numToD: this.state.toAdd
    })
    
    }
    handleSubmitDown = (event) => {
        let negNum=-this.state.toAdd
        event.preventDefault()
        this.props.setTotalDown(negNum)
        this.setState({
            ...this.state,
            numToD: negNum
        })
    }
    saveValue=()=>{
        this.setState({
            toAdd: '',
            numDis: [...this.state.numDis,this.state.numToD ]
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
               <button onClick={this.saveValue}>Save</button>
               <h2>Number To Save   "{this.state.numToD}"</h2>
                    <ul>
          {this.state.numDis.map(num => (<History key={num} num={num}/>))}
                </ul>
            </div>
        );
    }
}

export default EnterNumber;
