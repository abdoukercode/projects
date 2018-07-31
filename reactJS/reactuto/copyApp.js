import React, { Component } from 'react';
import MyComponent from './MyComponent';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    //this.onSubmit= this.onSubmit.bind(this);

    this.state= {
      title: "App title",
      name: "Initial name"
    }
    this.onClick= this.onClick.bind(this);
    this.updateName= this.updateName.bind(this);
    
  }

  onClick(){
    this.setState({
      title : "changed to new title"
    });
    console.log("change triggered")
  }
  
/*   onMouseEnter(){
    alert("mouse entered !!")
  } */
  onChange(e){
    //console.log(e.target.value);
  }
  updateName(e){
    this.setState({
      name : e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
   // alert('submitted !!'  );
    console.log(this.input.value);
  }
    render() {
      const list = [
        "item1",
        "item2",
        "item3",
        "item4"
      ];
    return (
      <div className="App">
            
         <h1>
              {
                list.map((item) => {
                return( <div onMouseEnter={this.onMouseEnter} key={item}>{item}</div> )
                })
              }
         </h1>

              <form onSubmit={this.onSubmit}> 
              <input type="text" onChange={this.onChange} ref={input => this.input = input}/>
              </form>
              <h1>{this.state.title}</h1>

              <button onClick ={this.onClick}>Change title here</button>

              <MyComponent
                title="my component tilte"
                name="my component name"
                onClick={this.onClick}
              />

              <input 
              onChange={this.updateName}
              value={this.state.name}/>
      </div>
    );
  }
}

export default App;
