import React from "react";

class AppDay7 extends React.Component {

    constructor() {
        super();
    }

    render() {
        const days = Array.from({length: new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, 0).getDate()}, (_, i) => i + 1)

        const rows = days.reduce(function (rows, key, index) {
            return (index % 7 == 0 ? rows.push([key])
                : rows[rows.length-1].push(key)) && rows;
        }, []);

        const condition = this.props.date.getFullYear() == this.props.selectedDate.getFullYear() && this.props.date.getMonth() == this.props.selectedDate.getMonth()

        const daysTag = rows.map(row => (
            <div style={{display: 'flex'}}>
                { row.map(day => {
                    if(condition && this.props.selectedDate.getDate() == day)
                        return <div className='datepicker-selected-day'>{day}</div>
                    else
                    {
                        const dayContainNotes = this.props.notes.filter(e => e.date.getFullYear() === this.props.date.getFullYear() && e.date.getMonth() === this.props.date.getMonth() && e.date.getDate() === day).length > 0;
                        if(dayContainNotes)
                            return <div className='datepicker-day' onClick={this.props.handleSelectedDate.bind(this, new Date(this.props.date.getFullYear(), this.props.date.getMonth(), day))}>
                                {day}
                                <span className="datepicker-icon"></span>
                            </div>
                        else
                            return <div className='datepicker-day' onClick={this.props.handleSelectedDate.bind(this, new Date(this.props.date.getFullYear(), this.props.date.getMonth(), day))}>{day}</div>
                    }
                }) }
            </div>
        ))

        return (<div>
                {daysTag}
            </div>
        );
    }
}
export default AppDay7;
