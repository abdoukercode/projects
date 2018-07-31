import React, { Component } from 'react';

// make a new context
const MyContext = React.createContext();
// Create provider
class MyProvider extends Component {
  state ={
    name: 'Roseleone',
    age: 5,
    cool: false
  }

  render(){
    return (
      <MyContext.Provider value={{
        state:this.state,
        growYearOlder : () => {
          this.setState({
          age: this.state.age + 1
         
        });
        console.log("clicked");
      }
      }}>
        {
          this.props.children
        }
      </MyContext.Provider>
    )
  }

}


const Family = (props) => 
   (
    <div className="family">
    <Person /> 
    </div>
  );


class Person extends Component {
  render(){
    return (
      <div className="person">
        <MyContext.Consumer>
          {
            (context)=>(
              <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              {context.state.cool?
                <p>and I'm Cool 😃😄👍</p>
                : <p>and I'm not Cool 🙃😟🙁👎</p>
              }
              <button onClick={context.growYearOlder}>🍰🎂🍮</button>
              </React.Fragment>
  
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }

}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
          i'm react app
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
