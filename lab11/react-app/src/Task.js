import React from 'react'

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.item.id,
            text: this.props.item.text,
            completed: this.props.item.completed
        }
        this.handleCompleted = this.handleCompleted.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleCompleted(id) {
        this.setState(prevState => {
            return { completed: !prevState.completed }
        })
        this.props.checkedFunction(id)
    }

    handleDelete(id) {
        this.props.deleteFunction(id)
    }

    render() {
        const completedStyle = {
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="task">
                <input 
                type="checkbox" 
                checked={this.state.completed} 
                onChange={() => this.handleCompleted(this.state.id)}/>
                <p style={this.state.completed ? completedStyle : null}>{this.state.text}</p>
                <button type="button" name="delete" onClick={() => this.handleDelete(this.state.id)}>X</button>
            </div>
        )
    }
}

export default Task