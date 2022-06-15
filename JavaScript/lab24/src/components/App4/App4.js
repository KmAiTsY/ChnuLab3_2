import React from "react";
import AppQuestion4 from "./AppQuestion4";
import AppList4 from "./AppList4";

class App4 extends React.Component {

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
                    right: 0,
                    userAnswer: 0
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
                    right: 1,
                    userAnswer: 0
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
                    right: 2,
                    userAnswer: 0
                }
            ], testCompleted: false };
    }

    setUserAnswer = (index, questionNum, event) => {
        console.log(index)
        this.state.test[questionNum]['userAnswer'] = index;
        this.setState({test: this.state.test})
    }

    completeTest = () => {
        this.setState({testCompleted: true})
    }

    render() {
        const tests = this.state.test.map((item, index) => {
            return <AppList4 key={index} question={item.question} answers={item.answers} right={item.right} userAnswer={item.userAnswer}/>;
        });

        var tag;
        if(this.state.testCompleted) tag = tests;
        else tag = <AppQuestion4 test = {this.state.test} setUserAnswer = {this.setUserAnswer.bind(this)} completeTest = {this.completeTest.bind(this)} />


        return (<div>
                {tag}
            </div>
        );
    }
}
export default App4;
