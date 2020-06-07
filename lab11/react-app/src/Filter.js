import React from 'react'

class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {checked: this.props.hideC}
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleChecked() {
        this.props.handleHide(this.state.checked)
        this.setState(prevState => ({checked: !prevState.checked}))
    }

    render() {
        return (
            <div className="filter">
                <input 
                type="checkbox" 
                checked={this.state.checked} 
                onChange={() => this.handleChecked()}/>
                <p>Hide Completed</p>
            </div>
        )
    }
}

export default Filter