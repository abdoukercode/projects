import React, {
  Component
} from 'react';
import 
  Form
from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: " Js Image support👺 ",
      
      
    }
  }

  componentDidMount() {
    console.log("component mounted !")
  }

  render() {
    return ( 
      <div className = "App" >
      
      <Form 
        title={this.state.title} 
        
      />

      </div>
    );
  }
}

export default App;
