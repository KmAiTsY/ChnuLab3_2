import React from "react";

class AppList5 extends React.Component {

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
        if(this.arrayEquals(this.props.userAnswer.sort(function(a, b){return a - b}), this.props.right.sort(function(a, b){return a - b}))) {
            this.state.className = 'correct';
            this.state.message = 'Ваша відповідь - ' + this.props.userAnswer + ', правильно';
        }
        else {
            console.log(this.props.userAnswer)
            console.log(this.props.right)
            this.state.className = 'incorrect';
            this.state.message = 'Ваша відповідь ' + this.props.userAnswer + ', не правильно, правильна відповідь - ' + this.props.right;
        }
        this.setState({answered: true})
    }

    arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
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
export default AppList5;
