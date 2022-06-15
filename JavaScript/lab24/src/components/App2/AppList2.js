import React from 'react';

class AppList2 extends React.Component {

    constructor() {
        super();
        this.state = {
            answered: false,
            message: '',
            className: '',
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    acceptAnswer = () => {
        if(this.state.value == this.props.right) {
            this.state.className = 'correct';
            this.state.message = 'Ваша відповідь - ' + this.state.value + ', правильно';
        }
        else {
            this.state.className = 'incorrect';
            this.state.message = 'Ваша відповідь ' + this.state.value + ', не правильно, правильна відповідь - ' + this.props.right;
        }
        this.setState({answered: true})
    }

    render() {
        var tag;
        if(this.state.answered)
            tag = <p className={this.state.className}>{this.state.message}</p>
        else
            tag = <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={this.acceptAnswer.bind(this)}>Скласти тест</button>
            </React.Fragment>

        const answers = this.props.answers.map((item, index) => {
            return <li>
                {item}
            </li>

        });

        return (<div>
                <p>{this.props.question}</p>
                <ul>{answers}</ul>
                {tag}
            </div>
        );
    }
}

export default AppList2;
