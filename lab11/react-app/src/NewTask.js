import React from 'react'

class NewTask extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.enterPressed = this.enterPressed.bind(this)
    }
    handleAdd() {
        const textInField = document.getElementById("ftask").value
        if (textInField === "")
            return
        this.props.addFunction(textInField)
        document.getElementById("ftask").value = null
    }
    enterPressed(event) {
        if (event.key === "Enter") {
            this.handleAdd()
          }
    }
    render() {
        return (
            <div className='new-task'>
                <input type="text" id="ftask" name="ftask" onKeyDown={this.enterPressed}/>
                <input type="button" value="Add" onClick={this.handleAdd}/>
            </div>
        )
    }
}

export default NewTask