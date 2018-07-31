import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from "react-js-pagination";


const API_URI= "http://localhost:8000/api/users/";
import getUsers from './api/Users';

import UserRow from './UserRow';



export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            activePage: 1

        }
    }

    componentDidMount(){
        getUsers().then(res => {
            this.setState({
                users: [...res]
            });
        })
    }

    deleteUser = (user) => {
        ///*** delete from database ****///

        axios.delete(API_URI + user.id )
            .then(res=> console.log(res))
            .catch(err => err)

        //******Delete from vue******//
        /* const newState = this.state.users.slice()
         newState.splice(newState.indexOf(user), 1)*/
        const {users} =this.state
        console.log(users)
        //const serID = user.id;
        const newUsers = users.filter(u =>
            u !== user)
        console.log(newUsers)

        this.setState({
            users: newUsers
        })


    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }


    render() {
        const {users} = this.state;

        return (
    
            <div className="container">
                <h2>Lara ReactJs</h2>
                <p>there are {users.length}  users </p>
                    <div className="text-right"><button className="btn btn-success">Add New User</button></div>
    
                <table className="table table-light table-hover">
                    <thead>

                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,i) => (

                                <UserRow key={i} i={i} user={user} users={this.state.users} delete={this.deleteUser} />
                            )
                        )
                    }
                    </tbody>
                </table>

                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        
        );
    }
}




if (document.getElementById('app')) {
    ReactDOM.render(<Users />, document.getElementById('app'));
}
