import React from 'react';
import AppQuestion3 from "./AppQuestion3";
import AppList3 from "./AppList3";

class App3 extends React.Component {

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
                    right: 'Вiдповiдь1',
                    userAnswer: ''
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
                    right: 'Вiдповiдь2',
                    userAnswer: ''
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
                    right: 'Вiдповiдь3',
                    userAnswer: ''
                }
            ], testCompleted: false };
    }

    setUserAnswer = (index, event) => {
        this.state.test[index]['userAnswer'] = event.target.value;
        this.setState({test: this.state.test})
    }

    completeTest = () => {
        this.setState({testCompleted: true})
    }

    render() {
        const tests = this.state.test.map((item, index) => {
            return <AppList3 key={index} question={item.question} answers={item.answers} right={item.right} userAnswer={item.userAnswer}/>;
        });

        var tag;
        if(this.state.testCompleted) tag = tests;
        else tag = <AppQuestion3 test = {this.state.test} setUserAnswer = {this.setUserAnswer.bind(this)} completeTest = {this.completeTest.bind(this)} />


        return (<div>
                {tag}
            </div>
        );
    }
}
export default App3;
