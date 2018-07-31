import React, {Component} from "react";


export default class UserRow extends Component {
    constructor(props){
        super(props)

         }

    deleteUser=(user)=> {
        this.props.delete(user)
    }

render() {

    return(
            <tr key={this.props.i}>
            <td>{this.props.user.id}</td>
            <td>{this.props.user.name}</td>
            <td>{this.props.user.email}</td>
            <td>
            <a  href={"/users/"+this.props.user.id+"/edit"} className="btn btn-primary">Edit</a>
            || <button className="bnt btn-danger" onClick={() => {
                this.deleteUser(this.props.user)
            }}>Delete</button></td>
            </tr>
)


}

}