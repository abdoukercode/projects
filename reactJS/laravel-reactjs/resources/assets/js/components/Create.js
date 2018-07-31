import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Create extends Component {

    constructor(){

        super();
        this.state={
            name: '',
            email:'',
            password:''
        }
    }

handleInputNameChange = e =>
        this.setState({
            name: e.target.value
        });
handleInputEmailChange = e =>
        this.setState({
            email: e.target.value
        });
handleInputPasswordChange = e =>
        this.setState({
            password: e.target.value
        });
handleSubmit = e => {
    
        e.preventDefault();
        console.log(this.state)
        axios.post('/api/users', {
            name : this.state.name,
             email: this.state.email,
              password :this.state.password
        })
            .then(res => {
                console.log(res)
            })
            .catch(err=> console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Add New User </h2>
                <div className="card card-outline-secondary">
                        <div className="card-header">
                            <h3 className="mb-0">Sign Up</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input type="text" className="form-control"  required="true" name="name" placeholder="Full name" value={this.state.name} onChange={this.handleInputNameChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3">Email</label>
                                    <input type="email" className="form-control"  placeholder="Email" name="email" required="true" value={this.state.email} onChange={this.handleInputEmailChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="true" value={this.state.password} onChange={this.handleInputPasswordChange}/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg float-right">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }

}


if (document.getElementById('create')) {
    ReactDOM.render(<Create />, document.getElementById('create'));
}

