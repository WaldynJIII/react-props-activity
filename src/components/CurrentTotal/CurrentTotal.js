import React, { Component } from 'react';
import EnterNumber from '../EnterNumber/EnterNumber'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
                <Grid item md={3}>
                <Card>
                    <CardContent>
                        <Typography>
                            Current Total
                        </Typography>
                        <Typography>
                            {this.state.total}
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
<EnterNumber  setTotalUp={this.setTotalUp} setTotalDown={this.setTotalDown}/>

            </div>
        );
    }
}

export default CurrentTotal;
