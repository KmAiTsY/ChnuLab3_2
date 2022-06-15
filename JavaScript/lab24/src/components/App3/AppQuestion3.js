import React from 'react';

class AppQuestion3 extends React.Component {

    constructor() {
        super();
        this.state = {
            questionNum: 0
        }
    }

    changeQuestion = (num) => {
        this.setState({questionNum: this.state.questionNum + num})
    }

    render() {
        const answers = this.props.test[this.state.questionNum].answers.map((item, index) => {
            return <li>
                {item}
            </li>
        })

        var answersCount = 0;
        this.props.test.map((item, index) => {
            if(item.userAnswer != '') answersCount++;
        })

        var tag;
        if(answersCount == this.props.test.length) tag = <button onClick={this.props.completeTest.bind(this)}>Перевірити відповіді</button>

        return (<div>
                <p>{this.props.test[this.state.questionNum].question}</p>
                <ul>{answers}</ul>
                <input type="text" value={this.props.test[this.state.questionNum].userAnswer} onChange={this.props.setUserAnswer.bind(this, this.state.questionNum)} />
                <button onClick={this.changeQuestion.bind(this, -1)} className={this.state.questionNum == 0 ? 'btn-disable' : ''}>назад</button>
                <button onClick={this.changeQuestion.bind(this, 1)} className={this.state.questionNum == this.props.test.length - 1 ? 'btn-disable' : ''}>вперед</button>
                {tag}
            </div>
        );
    }
}
export default AppQuestion3;
