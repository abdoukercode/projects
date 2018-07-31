import React, { Component } from 'react';

class UserOutput extends Component {


    componentDidMount(){
        //console.log( this.props.userName)
    }

    render() {
        const {userName}= this.props;
        const style ={
            fontWeight: 700,
            textTransform: "uppercase"
        }
        return (
            <div className="card text-center">
                <div className="card-header">
                    UserOutput
            </div>
                <div className="card-block">
                    <h4 className="card-title">Output Show here !</h4>
                    <p className="card-text" style={style}>this is the username from appjs props: {userName}</p>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>
                <div className="card-footer text-muted">
                    UserOutput
                </div>
            </div>
        );
    }
}

export default UserOutput;
