import React from 'react';
import ReactDOM from 'react-dom';

class Quest extends React.Component {
    constructor() {
        super();
        this.state = {
            zd6_radio_choose: -1,
            zd6_color: ''
        };
    }

    handleRadioChange(event) {
        this.setState({zd6_radio_choose: event.target.value});
        this.setState({zd6_color: ''})
    }

    checkAnswer(event) {
        if (this.state.zd6_radio_choose == this.props.quest['right']) {
            this.setState({zd6_color: 'green'})
        } else
            this.setState({zd6_color: 'red'})
    }

    render() {
        return <div>
            <form>
                <h3>{this.props.quest['question']}</h3>
                {this.props.quest['answers'].map(
                    (item, index) => {
                        var tagP = '';
                        if (this.state.zd6_radio_choose == index && this.state.zd6_color) {
                            tagP = <p key={index} style={{backgroundColor: this.state.zd6_color}}>
                                <input
                                    name="lang" type="radio" value={index}
                                    checked={this.state.zd6_radio_choose == index}
                                    onChange={this.handleRadioChange.bind(this)}
                                />
                                {item}
                            </p>;
                        } else {
                            tagP = <p key={index}>
                                <input
                                    name="lang" type="radio" value={index}
                                    checked={this.state.zd6_radio_choose == index}
                                    onChange={this.handleRadioChange.bind(this)}
                                />
                                {item}
                            </p>;
                        }
                        return tagP;
                    }
                )}
                <button type={"button"} onClick={this.checkAnswer.bind(this)}>Next</button>
            </form>
        </div>;
    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            zd1_value: '',
            zd1_color: "red",
            employers_list: [
                ["Stas", "Shevchenko", 5600, "m"],
                ["Mykhailo", "Handabura", 10500, "m"],
                ["Andriy", "Zelenskiy", 200500, "m"],
                ["Volodymyr", "Zelenskiy", 0, "m"]
            ],
            zd2_value: ['', '', '', 'm'],
            employers_list2: [
                ["Stas", "Shevchenko", 5600],
                ["Mykhailo", "Handabura", 10500],
                ["Andriy", "Zelenskiy", 200500],
                ["Volodymyr", "Zelenskiy", 4],
                ["Volodymyr", "Zelenskiy", 5],
                ["Volodymyr", "Zelenskiy", 6],
                ["Volodymyr", "Zelenskiy", 7],
                ["Volodymyr", "Zelenskiy", 8],
                ["Volodymyr", "Zelenskiy", 9],
                ["Volodymyr", "Zelenskiy", 10],
                ["Volodymyr", "Zelenskiy", 11],
                ["Volodymyr", "Zelenskiy", 12],
                ["Volodymyr", "Zelenskiy", 13],
                ["Volodymyr", "Zelenskiy", 14],
                ["Volodymyr", "Zelenskiy", 15],
                ["Volodymyr", "Zelenskiy", 16],
                ["Volodymyr", "Zelenskiy", 17],
                ["Volodymyr", "Zelenskiy", 18],
                ["Volodymyr", "Zelenskiy", 19],
                ["Volodymyr", "Zelenskiy", 20],
                ["Volodymyr", "Zelenskiy", 21],
                ["Volodymyr", "Zelenskiy", 22],
                ["Volodymyr", "Zelenskiy", 23],
            ],
            zd3_id_page: 0,
            zd4_option_list: [],
            zd4_input_value: '',
            zd4_select_choose: '',

            zd5_sum: 0,
            zd5_select_value: ['', ''],
            zd5_valute_list: ['UAH', 'USD', 'EUR'],
            zd5_rezult: '',

            test: [
                {
                    question: 'Питання 1',
                    answers: [
                        'Відповідь1',
                        'Відповідь2',
                        'Відповідь3',
                        'Відповідь4',
                        'Відповідь5',
                    ],
                    right: 3, //номер правильної відповіді
                },
                {
                    question: 'Питання 2',
                    answers: [
                        'Відповідь1',
                        'Відповідь2',
                        'Відповідь3',
                        'Відповідь4',
                        'Відповідь5',
                    ],
                    right: 1, //номер правильної відповіді
                },
            ],


        };
        this.state.zd5_select_value[0] = this.state.zd5_valute_list[0];
        this.state.zd5_select_value[1] = this.state.zd5_valute_list[1];
    }

    handleChangeV1(event) {
        if (event.target.value.length > 4 && event.target.value.length < 9) {
            this.setState({zd1_color: "green"});
        } else this.setState({zd1_color: "red"});
        this.setState({zd1_value: event.target.value});
    }

    addEmployer(event) {
        this.state.employers_list.push(this.state.zd2_value.slice());
        this.setState({employers_list: this.state.employers_list});
    }

    handleZd2_valueChange(id, event) {
        this.state.zd2_value[id] = event.target.value
        this.setState({zd2_value: this.state.zd2_value});
    }

    handleChangeZd3_id_page(id, event) {
        this.setState({zd3_id_page: id - 1});
    }

    handleChangeV4(event) {
        this.setState({zd4_input_value: event.target.value});
    }

    addOption(event) {
        this.state.zd4_option_list.push(this.state.zd4_input_value);
        this.setState({zd4_option_list: this.state.zd4_option_list});
        this.setState({zd4_select_choose: this.state.zd4_input_value});
    }

    handleZd4_SelectChange(event) {
        this.setState({zd4_select_choose: event.target.value});
    }

    handleChangeZd5Sum(event) {
        this.setState({zd5_sum: event.target.value});
        this.setState({zd5_rezult: ''});
    }

    handleZd5_SelectChange(id, event) {
        this.state.zd5_select_value[id] = event.target.value;
        this.setState({zd5_select_value: this.state.zd5_select_value});
        this.setState({zd5_rezult: ''});
    }

    zd5_convert(event) {
        var mult_dict = {
            'UAH-USD': 0.034,
            'UAH-EUR': 0.031,
            'USD-EUR': 0.92,
            'USD-UAH': 29.50,
            'EUR-UAH': 32,
            'EUR-USD': 1.09
        }
        if (mult_dict[this.state.zd5_select_value[0] + '-' + this.state.zd5_select_value[1]])
            this.state.zd5_rezult = (this.state.zd5_sum *
                mult_dict[this.state.zd5_select_value[0] + '-' + this.state.zd5_select_value[1]]).toFixed(2);

        this.setState({zd5_rezult: this.state.zd5_rezult});
    }


    render() {
        const table_employes = this.state.employers_list.map((item, index) => {
            return <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
            </tr>;
        });

        const table_employes2 = this.state.employers_list2.map((item, index) => {
            if (index >= this.state.zd3_id_page * 10 && index < this.state.zd3_id_page * 10 + 10)
                return <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                </tr>;
        });

        var pages_employes = [];
        var n = Math.ceil(this.state.employers_list2.length / 10);
        for (let i = 0; i < n; i++) {
            pages_employes.push(i + 1);
        }
        const pages_employes_tag = pages_employes.map((item, index) => {
            return <b key={index} onClick={this.handleChangeZd3_id_page.bind(this, item)}>
                <span style={{cursor: 'pointer'}}>
                    {item}
                </span>
                {' '}
            </b>;
        });

        const zd4_options_list = this.state.zd4_option_list.map((item, index) => {
            return <option key={index}>
                {item}
            </option>;
        });

        const zd5_options_list = this.state.zd5_valute_list.map((item, index) => {
            return <option key={index}>
                {item}
            </option>;
        });

        const zd6_quest_list = this.state.test.map((item, index) => {
            // return <Quest key={index} quest={[item.question,item.answers,item.right]} />;
            return <Quest key={index} quest={item}/>;
        });

        return (
            <div>
                1
                <br/>
                <input name="lang"
                       value={this.state.zd1_value}
                       onChange={this.handleChangeV1.bind(this)}
                       style={{backgroundColor: this.state.zd1_color}}/>
                <hr/>
                2
                <br/>
                <table>
                    <tr>
                        <th> Ім'я</th>
                        <th> Прізвище</th>
                        <th> Зарплата</th>
                        <th> Стать</th>
                    </tr>
                    {table_employes}
                </table>
                <input name="lang"
                       value={this.state.zd2_value[0]}
                       onChange={this.handleZd2_valueChange.bind(this, 0)}/>
                <input name="lang"
                       value={this.state.zd2_value[1]}
                       onChange={this.handleZd2_valueChange.bind(this, 1)}/>
                <input name="lang"
                       value={this.state.zd2_value[2]}
                       onChange={this.handleZd2_valueChange.bind(this, 2)}/>
                <select value={this.state.zd2_value[3]} onChange={this.handleZd2_valueChange.bind(this, 3)}>
                    <option>m</option>
                    <option>w</option>
                </select>
                <button onClick={this.addEmployer.bind(this)}>add</button>

                <hr/>

                3
                <br/>
                <p>{pages_employes_tag}</p>
                <table>
                    <tr>
                        <th> Ім'я</th>
                        <th> Прізвище</th>
                        <th> Зарплата</th>
                    </tr>
                    {table_employes2}
                </table>
                <hr/>

                4
                <br/>
                <select value={this.state.zd4_select_choose} onChange={this.handleZd4_SelectChange.bind(this)}>
                    {zd4_options_list}
                </select>
                <input name="lang"
                       value={this.state.zd4_input_value}
                       onChange={this.handleChangeV4.bind(this)}/>
                <button onClick={this.addOption.bind(this)}>add</button>
                {this.state.zd4_select_choose ? <p>В селекті вибрано: {this.state.zd4_select_choose}</p> : ''}
                <hr/>

                5
                <br/>
                <input name="lang"
                       value={this.state.zd5_sum}
                       onChange={this.handleChangeZd5Sum.bind(this)}/>
                <select value={this.state.zd5_select_value[0]} onChange={this.handleZd5_SelectChange.bind(this, 0)}>
                    {zd5_options_list}
                </select>
                <select value={this.state.zd5_select_value[1]} onChange={this.handleZd5_SelectChange.bind(this, 1)}>
                    {zd5_options_list}
                </select>
                <button onClick={this.zd5_convert.bind(this)}>Convert</button>
                <br/>
                {this.state.zd5_rezult ?
                    <p>
                        {this.state.zd5_sum.slice() + ' ' + this.state.zd5_select_value[0]}
                        {' = ' + this.state.zd5_rezult + ' ' + this.state.zd5_select_value[1]}
                    </p>
                    : ''}
                <hr/>

                6-7
                <br/>
                {zd6_quest_list}
                <hr/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
