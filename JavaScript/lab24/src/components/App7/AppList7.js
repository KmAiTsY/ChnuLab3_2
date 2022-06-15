import React from "react";

class AppList7 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { edit: false, value: props.text, checked: false };
    }

    handleEditButton() {
        this.setState({edit: !this.state.edit})
    }

    handleDeleteButton() {
        this.props.parentDeleteCallBack(this.props.index);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleCheck(event) {
        this.setState({checked: !this.state.checked});
    }

    saveChanges(event) {
        this.state.edit = !this.state.edit
        let value = {header: this.props.header, text: this.state.value, date: this.props.date}
        this.props.parentEditCallBack(value, this.props.index);
    }

    render() {
        const style = {
            textDecoration: this.state.checked ? 'line-through' : 'none'
        }

        let tag;
        if(!this.state.edit) tag =  <p style={style}>{this.props.text}</p>
        else tag = <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} onBlur={this.saveChanges.bind(this)}/>

        return (<div>
                <p>{this.props.header}</p>
                {tag}
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck.bind(this)}/>
                <button onClick={this.handleEditButton.bind(this)}>Редагувати</button>
                <button onClick={this.handleDeleteButton.bind(this)}>Видалити</button>
            </div>
        );
    }
}
export default AppList7;
