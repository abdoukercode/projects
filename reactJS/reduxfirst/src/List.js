import {connect} from 'react-redux'   
import React from 'react'
import Item from './Item'
import InputMirror from './InputMirror'
import store from './store/'
import Footer from './Footer'
import {Provider} from 'react-redux'

const List = (props) => {
        
        return (
                <div>
                    <Provider store={store}><InputMirror /></Provider>   
                 
                    <ul className="list-group">
                    {   props.items.map( (item,i) =>              
                        <li className="list-group-item" key={i}> 

                        <Item name={item} /> <button className="btn btn-sm btn-danger" onClick={()=>props.deleteItem(item)}>🗵</button>
                        </li>
                    )

                    }
                    </ul>
                    <hr/>
                    <Provider store={store}><Footer /></Provider>   
                    
                </div>
        )
}




function mapStateToProps(state){


    console.log('mapStateToProps', state);


return {
   
    items: state.items,

}
}

function mapDispatchToProps(dispatch) {
    return {
        deleteItem: (item) => {
                //event.preventDefault();
            console.log("delete clicked",item);
            const action = {type : 'DELETEITEM', selectedItem: item};
            dispatch(action)
          
        }
}

}
export default  connect(mapStateToProps,mapDispatchToProps)(List);




