import React, { Component } from 'react';
import PropTypes from 'prop-types';
const propTypes =  {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired
}


class MyComponent extends Component {

    componentWillMount()
{
    //good place fot ajax request
    console.log("will mount")
}

componentDidMount()
{
    console.log("did mount")
    
}
componentWillUpdate(nextProps, nextState){
    console.log(this.props, this.state, nextProps, nextState)
}

componentDidUpdate(prevProps, prevState){
    console.log(this.props, this.state, prevProps, prevState)

}

    render() {

        // destructuring
        const { name , title, onClick } = this.props;
    return (
      <div className="App">
            <h1>MyComponent to be sent into Appjs </h1>
                <ul>
                    <li>{name}</li>
                    <li>{title}</li>
                    <button onClick ={onClick}>click from myComp</button>
                </ul>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

export default MyComponent;
