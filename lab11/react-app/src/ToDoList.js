import React from 'react'
import Task from './Task'

class ToDoList extends React.Component {
    render() {
        let todoItems = this.props.todoList
        if (todoItems.length > 0) {
            if (this.props.hideC) {
                let filteredTodoItems = todoItems.filter(item => !item.completed)
                todoItems = filteredTodoItems.map(item => <Task key={item.id}
                    item={item}
                    deleteFunction={this.props.deleteFunction}
                    checkedFunction={this.props.checkedFunction}/>)
            } else {
            todoItems = todoItems.map(item => <Task key={item.id}
                item={item}
                deleteFunction={this.props.deleteFunction}
                checkedFunction={this.props.checkedFunction}/>)
            }
        }
        return (
            <div className='todo-list'>
                {todoItems}
            </div>
        )
    }
}

export default ToDoList