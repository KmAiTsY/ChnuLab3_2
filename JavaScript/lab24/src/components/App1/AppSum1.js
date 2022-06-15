import React from 'react';

class AppSum1 extends React.Component {

    constructor() {
        super();
    }

    render() {
        var sum = 0;
        this.props.employee.forEach(element => {
            sum += element.worked * element.salary
        });

        return (
            <div>
                Сума: {sum}
            </div>
        );
    }
}
export default AppSum1
