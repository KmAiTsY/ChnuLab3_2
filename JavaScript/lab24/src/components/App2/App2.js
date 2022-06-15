import React from 'react';
import AppList2 from "./AppList2";

class App2 extends React.Component {

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
                    right: 'Вiдповiдь1'
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
                    right: 'Вiдповiдь2'
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
                    right: 'Вiдповiдь3'
                }
            ] };
    }

    render() {
        const tests = this.state.test.map((item, index) => {
            return <AppList2 key={index} question={item.question} answers={item.answers} right={item.right} />;
        });

        return (<div>
                {tests}
            </div>
        );
    }
}
export default App2
