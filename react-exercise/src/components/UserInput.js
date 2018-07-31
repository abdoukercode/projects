import React, { Component } from 'react';

class UserInput extends Component {

    inputchanged(e){
        console.log(e.target.value)
    }


  render() {
    return (
<div className="card text-center">
    <div className="card-header">
        UserInput
    </div>
    <div className="card-block">
    <h4 className="card-title">Input show here !</h4>
    <p className="card-text"><input type="text" onChange={this.props.changed} value={this.props.value}/></p><br/>
    
    </div>
    <div className="card-footer text-muted">
    UserInput
    </div>
</div>
    );
  }
}

export default UserInput;
