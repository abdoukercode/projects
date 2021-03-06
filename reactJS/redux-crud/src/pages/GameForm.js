import React from 'react'
import classnames from 'classnames';
import {connect} from 'react-redux'
import {saveGame} from '../pages/actions'

class GameForm extends React.Component {
    state = {
      title: '',
      cover: '',
      errors: {},
      loading: false,

    }
  
    handleChange = (e) => {
      if (!!this.state.errors[e.target.name]) {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];
        this.setState({
          [e.target.name]: e.target.value,
          errors
        });
      } else {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit = (e) => {
        e.preventDefault();
    
        // validation
        let errors = {};
        if (this.state.title === '') errors.title = "Can't be empty";
        if (this.state.cover === '') errors.cover = "Can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
    
        if (isValid) {

          this.setState({ loading: true });
          this.props.saveGame({title, cover })
            .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
        }
      }

render() {
        return (
            <form className={classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
                <h1>Add New Game</h1>

                { !!this.state.errors.globl && <div className="ui negative message"><p>{this.state.errors.global}</p></div> }
                <div className={classnames('field', { error: !!this.state.errors.title})}>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title" 
                        value={this.state.title}
                        onChange={this.handleChange}
                        id="title"/>
                        <span>{this.state.errors.title}</span>
                        
                </div>
                <div className={classnames('field', { error: !!this.state.errors
                    .cover})}>
                    <label htmlFor="cover">Cover URL</label>
                    <input 
                        name="cover" 
                        value={this.state.cover}
                        onChange={this.handleChange}
                        id="cover"/>
                        <span>{this.state.errors.cover}</span>
                </div>

                <div className="field">
                {!this.state.cover? null :<img src={this.state.cover} alt="cover" className="ui small bordered image"/>}
                </div>

                <div className="field">
                    <button className="ui primary button" type="submit" >Save</button>
                </div>
            </form>
        )
    }
}


export default connect({ saveGame })(GameForm);
