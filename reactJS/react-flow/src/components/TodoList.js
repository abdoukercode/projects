/* @flow */

import React, { Component } from 'react'
import Todo from './Todo';

type SingleTodo = {
    id:number,
    title:string;
    description:string
}

type props ={
    todoList: Array<SingleTodo>,
    handleSubmit: () => void
}

export default class TodoList extends Component<props,null> {
    render() {
        let mappedTodos = this.props.todoList.map((todo)=> 
            <Todo key={todo.id} todoInfo={todo} />
        )
        return (
            <div>
                {
                    mappedTodos

                }
                
            </div>
        )
    }
}
