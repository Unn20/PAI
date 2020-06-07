import React from 'react'
import './style.css'
import ToDoList from './ToDoList'
import NewTask from './NewTask'
import Filter from './Filter'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: [], //{id: 0, text: 'zadanko1', completed: false}, {id: 1, text: 'zadanko2', completed: false}
      hideCompleted: false,
      currentId: 0
    }
    this.deleteTask = this.deleteTask.bind(this)
    this.handleHideCompleted = this.handleHideCompleted.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  deleteTask(id) {
    this.setState(prevState => {
      let updatedTodos = prevState.todoList.slice()
      let index = prevState.todoList.findIndex(item => item.id === id)
      updatedTodos.splice(index, 1)
      return {todoList: updatedTodos}
    })
  }

  addTask(pText) {
      this.setState(prevState => {
          const newTask = {
            id: prevState.currentId,
            text: pText,
            completed: false
          }
          const newList = prevState.todoList
          newList.push(newTask)
          return {
            todoList: newList,
            currentId: prevState.currentId + 1
          }
      })
  }

  handleHideCompleted(boolHide) {
    this.setState({hideCompleted: !boolHide})
  }

  handleChecked(id) {
    this.setState(prevState => {
      const updated = prevState.todoList.map(item => {
      if (id === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    return {todoList: updated}
  })
  }

  render() {
    const nothingText = "Nothing to do.."
    return (
      <div className="App">
        <header>
          ToDo App
        </header>
        <Filter handleHide={this.handleHideCompleted}
          hideC={this.state.hideCompleted}/>

          {this.state.todoList.length > 0 ?
            <ToDoList todoList={this.state.todoList}
              completedFuncton={this.completedFuncton}
              deleteFunction={this.deleteTask}
              checkedFunction={this.handleChecked}
              hideC={this.state.hideCompleted}/>
              : nothingText
          }

        <NewTask addFunction={this.addTask}/>
      </div>
    )
  }
}

export default App
