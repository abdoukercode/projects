import React from 'react'
import {connect} from 'react-redux'   

const Footer = (props) => {

        return (
            <footer>
                <h3>Total Items <span class="badge badge-pill badge-warning">{props.totalItems}</span></h3>
            </footer>
        )
    
}

function mapStateToProps(state){

return {
   
    totalItems: state.items.length,

}
}
export default  connect(mapStateToProps)(Footer);
