import React from 'react';

class AppList1 extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (<React.Fragment>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
                <td><input type="text" name="worked" value={this.props.worked} onChange={this.props.parentFunc.bind(this, this.props.index)} /></td>
                <td><input type="text" name="salary" value={this.props.salary} onChange={this.props.parentFunc.bind(this, this.props.index)} /></td>
                <td>{this.props.worked * this.props.salary}</td>
            </React.Fragment>
        );
    }
}
export default AppList1
