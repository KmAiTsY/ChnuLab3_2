import React from "react";

class AppQuestion5 extends React.Component {

    constructor() {
        super();
        this.state = {
            questionNum: 0,
            option: ''
        }
    }

    changeQuestion = (num) => {
        this.setState({questionNum: this.state.questionNum + num})
    }

    handleChange(index, questionNum, event) {
        if(event.target.checked) this.props.setUserAnswer(index, questionNum, event);
        else this.props.removeUserAnswer(index, questionNum, event);
    }

    render() {
        const answers = this.props.test[this.state.questionNum].answers.map((item, index) => {
            return <li>
                {item}
                <input type="checkbox" checked={this.props.test[this.state.questionNum].userAnswer.includes(index)} onChange={this.handleChange.bind(this, index, this.state.questionNum)}/>
            </li>
        })

        return (<div>
                <p>{this.props.test[this.state.questionNum].question}</p>
                <ul>{answers}</ul>
                <button onClick={this.changeQuestion.bind(this, -1)} className={this.state.questionNum == 0 ? 'btn-disable' : ''}>назад</button>
                <button onClick={this.changeQuestion.bind(this, 1)} className={this.state.questionNum == this.props.test.length - 1 ? 'btn-disable' : ''}>вперед</button>
                <button onClick={this.props.completeTest.bind(this)}>Перевірити відповіді</button>
            </div>
        );
    }
}
export default AppQuestion5;
