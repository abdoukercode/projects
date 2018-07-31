import React from 'react'
import constants from './store/constants';

import {connect} from 'react-redux'


const RepoSearch= (props) =>  {
        return (
            <div>
                <h2 className="mb-4">Repos Search</h2>
                <form onSubmit={props.handleSearchSubmit}>    
                    <input name="inputval" className="form-control form-control-lg mb-2" type="text" value={props.inputValue} onChange={props.handleInputChange} onMouseEnter={props.clearAll}/>
                        <button type="submit"  className="btn btn-sm btn-info">Save</button>
                </form>
                <div>
                <ul className="list-group mt-5">
                {
                        props.repos.map( (repo,i) =>              
                        <li className="list-group-item list-group-item-info" key={i}><a href={repo.html_url} target="_blank"> {repo.name}</a>   </li>
                     
                    )
                }
                </ul>
                </div>

            </div>
        )
}
const mapStateToProps= (state) =>{
    return {
        inputValue:state.searchInputValue,
        repos: state.repos
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        handleInputChange: (event) => {
            //console.log('handle input change');
            const action = {type:constants.SEARCH_INPUT_CHANGE, text:event.target.value};
            dispatch(action);
        },
        clearAll: (event) => {
            //console.log('handle input change');
            const action = {type:constants.CLEAR_ALL};
            dispatch(action);
        },
        handleSearchSubmit: (event) => {
                //console.log(event.target.elements.inputval.value)
                let query=event.target.elements.inputval.value;
            event.preventDefault();
            fetch(constants.CONST_URI +`${query}`)
                .then(res =>res.json())
                .then(data => {
                    console.log("dowe have data ?? ", data);
                    const action = {type:constants.SEARCH_SUBMIT, repos:data.items};
                    dispatch(action);
                });

                console.log("submit");
            ;
            //console.log('search submitted');

        }
    }
}

export default  connect(mapStateToProps,mapDispatchTopProps)(RepoSearch);
