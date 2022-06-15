import React from "react";

class AppList4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answered: false,
            message: '',
            className: ''
        }
        this.acceptAnswer()
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    acceptAnswer = () => {
        if(this.props.userAnswer == this.props.right) {
            this.state.className = 'correct';
            this.state.message = 'Ваша відповідь - ' + (this.props.userAnswer + 1) + ', правильно';
        }
        else {
            this.state.className = 'incorrect';
            this.state.message = 'Ваша відповідь ' + (this.props.userAnswer + 1) + ', не правильно, правильна відповідь - ' + (this.props.right + 1);
        }
        this.setState({answered: true})
    }

    render() {
        var tag = <p className={this.state.className}>{this.state.message}</p>;

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
export default AppList4;
