import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import getUsers from "./api/Users";

export default class Edit extends Component {

    constructor(){

        super();
        this.state={
            name: '',
            email:'',
            password:''
        }
    }

    componentWillMount(){
      let id = this.props.id;

        axios.get('/api/users/'+id)
            .then(res => {
                var user = res.data;
                this.setState({
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
            })
            .catch(err => err)
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

        })
            .then(res => {
                console.log(res)
            })
            .catch(err=> console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Edit User </h2>
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
                                    <button type="submit" className="btn btn-success btn-lg float-right">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }

}


if (document.getElementById('edit')) {

    var id = $('#edit').data("id");
    ReactDOM.render(<Edit id={id}/>, document.getElementById('edit'));
}

