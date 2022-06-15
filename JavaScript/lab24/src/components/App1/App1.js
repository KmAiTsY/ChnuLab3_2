import React from 'react';
import AppList1 from "./AppList1";
import AppSum1 from "./AppSum1";

class App1 extends React.Component {

    constructor() {
        super();
        this.state = {
            employee: [{name: 'Микола', surname: 'Максимович', worked: 31, salary: 5000},
                {name: 'Михайло', surname: 'Гандабура', worked: 0, salary: 0},
                {name: 'Петро', surname: 'Порошенко', worked: 360, salary: 1000000},
                {name: 'name', surname: 'surname', worked: 111, salary: 111}]
        };
    }

    handleChange = (index, event) => {
        this.state.employee[index][event.target.name] = event.target.value;
        this.setState({employee: this.state.employee})
    }

    render() {
        const rows = this.state.employee.map((item, index) => {
            return <tr>
                <AppList1 key={index} name={item.name} surname={item.surname} worked={item.worked} salary={item.salary}
                          index={index} parentFunc={this.handleChange}/>
            </tr>
        });

        return (<div>
                <table>
                    <tr>
                        <th>Ім'я</th>
                        <th>Прізвище</th>
                        <th>Відпрацьованих днів</th>
                        <th>Ставка за день</th>
                        <th>Зарплата</th>
                    </tr>
                    {rows}
                </table>
                <AppSum1 employee={this.state.employee}/>
            </div>
        );
    }
}

export default App1
