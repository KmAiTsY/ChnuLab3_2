import React from "react";
import AppList6 from "./AppList6";

class App6 extends React.Component {

    constructor() {
        super();
        this.state = { notes: [], value: ''
        };
    }

    handleEditCallback = (value, index) => {
        this.state.notes[index] = value;
        this.setState({notes: this.state.notes})
    }

    handleDeleteCallback = (index) => {
        this.state.notes.splice(index, 1);
        this.setState({notes: this.state.notes})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleButton() {
        let value = {header: 'ToDo' + (this.state.notes.length + 1), text: this.state.value, date: new Date()}
        this.state.notes.push(value);
        this.setState({notes: this.state.notes});
    }

    render() {
        const notes = this.state.notes.map((item, index) => {
            return <tr>
                <AppList6 key={index} header={item.header} text={item.text} date={item.date} index={index} parentEditCallBack={this.handleEditCallback} parentDeleteCallBack={this.handleDeleteCallback} />
            </tr>;
        });

        return (<div>
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleButton.bind(this)}>Додати</button>
                {notes}
            </div>
        );
    }
}
export default App6;
