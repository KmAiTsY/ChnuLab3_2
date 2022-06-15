import React from "react";
import AppQuestion5 from "./AppQuestion5";
import AppList5 from "./AppList5";

class App5 extends React.Component {

    constructor() {
        super();
        this.state = {
            test: [
                {
                    question: 'Питання1',
                    answers: [
                        'Вiдповiдь1',
                        'Вiдповiдь2',
                        'Вiдповiдь3',
                        'Вiдповiдь4',
                        'Вiдповiдь5'
                    ],
                    right: [0, 1],
                    userAnswer: []
                },
                {
                    question: 'Питання2',
                    answers: [
                        'Вiдповiдь1',
                        'Вiдповiдь2',
                        'Вiдповiдь3',
                        'Вiдповiдь4',
                        'Вiдповiдь5'
                    ],
                    right: [2, 3],
                    userAnswer: []
                },
                {
                    question: 'Питання3',
                    answers: [
                        'Вiдповiдь1',
                        'Вiдповiдь2',
                        'Вiдповiдь3',
                        'Вiдповiдь4',
                        'Вiдповiдь5'
                    ],
                    right: [0, 1, 2],
                    userAnswer: []
                }
            ], testCompleted: false };
    }

    setUserAnswer = (index, questionNum, event) => {
        this.state.test[questionNum]['userAnswer'].push(index);
        this.setState({test: this.state.test})
    }

    removeUserAnswer = (index, questionNum, event) => {
        var arrIndex = this.state.test[questionNum]['userAnswer'].indexOf(index);
        this.state.test[questionNum]['userAnswer'].splice(arrIndex, 1);
        this.setState({test: this.state.test})
    }

    completeTest = () => {
        this.setState({testCompleted: true})
    }

    render() {
        const tests = this.state.test.map((item, index) => {
            return <AppList5 key={index} question={item.question} answers={item.answers} right={item.right} userAnswer={item.userAnswer}/>;
        });

        var tag;
        if(this.state.testCompleted) tag = tests;
        else tag = <AppQuestion5 test = {this.state.test} setUserAnswer = {this.setUserAnswer.bind(this)} removeUserAnswer = {this.removeUserAnswer.bind(this)} completeTest = {this.completeTest.bind(this)} />


        return (<div>
                {tag}
            </div>
        );
    }
}
export default App5;
