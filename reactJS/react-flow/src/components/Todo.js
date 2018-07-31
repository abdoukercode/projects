/* @flow */

import React from 'react'

type Props={
    todoInfo: {
        id:number,
        title:string,
        description:string
    }
}


const Todo  = (props:Props) => {
    return (
        <div>
            <h3>{props.todoInfo.title}</h3>
            <h3>{props.todoInfo.description}</h3>
        </div>
    );
}

export default Todo;
