import React from "react";
import AppDay7 from "./AppDay7";

class AppCalendar7 extends React.Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    changeMonth = (value) => {
        var nd = new Date(this.state.date.getTime());
        nd.setMonth(this.state.date.getMonth() + value);
        this.setState({date: nd})
    }

    render() {

        return (<div className="datepicker">
                <div className="datepicker-header">
                    <div className="datepicker-current-month">
                        <button className="datepicker-navigation" onClick={this.changeMonth.bind(this, -1)}>&#60;</button>
                        {this.state.date.toLocaleString('uk', { month: 'long' })} {this.state.date.getFullYear()}
                        <button className="datepicker-navigation" onClick={this.changeMonth.bind(this, 1)}>&#62;</button>
                    </div>
                </div>
                <AppDay7 date={this.state.date} selectedDate={this.props.selectedDate} notes={this.props.notes} handleSelectedDate={this.props.handleSelectedDate}/>
            </div>
        );
    }
}
export default AppCalendar7;
