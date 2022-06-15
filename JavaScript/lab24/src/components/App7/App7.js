import React from "react";
import AppList7 from "./AppList7";
import AppCalendar7 from "./AppCalendar7";

class App7 extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedDate: new Date(),
            notes: [],
            value: ''
        }
    }

    handleSelectedDate = (newDate) => {
        this.setState({selectedDate: newDate})
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
        let value = {header: 'ToDo' + (this.state.notes.length + 1), text: this.state.value, date: this.state.selectedDate}
        this.state.notes.push(value);
        this.setState({notes: this.state.notes});
    }

    render() {
        const notes = this.state.notes.map((item, index) => {
            if(this.state.selectedDate.getFullYear() == item.date.getFullYear() && this.state.selectedDate.getMonth() == item.date.getMonth() && this.state.selectedDate.getDate() == item.date.getDate())
                return <tr>
                    <AppList7 key={index} header={item.header} text={item.text} date={item.date} index={index} parentEditCallBack={this.handleEditCallback} parentDeleteCallBack={this.handleDeleteCallback} />
                </tr>;
        });

        return ( <div>
                <AppCalendar7 selectedDate={this.state.selectedDate} notes={this.state.notes} handleSelectedDate={this.handleSelectedDate}/> <br/>
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleButton.bind(this)}>Додати</button>
                {notes}
            </div>
        );
    }
}
export default App7;
