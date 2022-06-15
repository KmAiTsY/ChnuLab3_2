import React from "react";

class AppQuestion4 extends React.Component {

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

    handleRadioChange(index, questionNum, event) {
        this.props.setUserAnswer(index, questionNum, event);
        this.setState({option: event.target.value})
    }

    render() {
        const answers = this.props.test[this.state.questionNum].answers.map((item, index) => {
            return <li>
                <input
                    name={"answers" + this.state.questionNum}
                    id={"answers" + this.state.questionNum + index}
                    type="radio"
                    value={"option" + index}
                    checked={"option" + this.props.test[this.state.questionNum].userAnswer == "option" + index}
                    onChange={this.handleRadioChange.bind(this, index, this.state.questionNum)}
                />
                <label for={"answers" + this.state.questionNum + index}>{item}</label><br />
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
export default AppQuestion4;
