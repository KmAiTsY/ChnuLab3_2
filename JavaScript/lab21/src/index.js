import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {name: 'Микола', surname: 'Шевченко', age: 30},
                {name: 'Василь', surname: 'Чумак', age: 40},
                {name: 'Петро', surname: 'Стеценко', age: 50},
            ],
            options: [true, true, true]
        };
    }

    handleCheckboxChange(index, event) {
        this.state.options[index] = !this.state.options[index];
        this.setState({options: this.state.options});

    }

    render() {
        const text4zd = this.state.users.map((item, index) => {
            return <li key={index}>
                <input
                    type="checkbox"
                    checked={this.state.options[index]}
                    onChange={this.handleCheckboxChange.bind(this, index)}
                />
                {item.name}
                {this.state.options[index] ? (" " + item.surname + " " + item.age) : ""}

            </li>;
        });
        return <ul>
            {text4zd}
        </ul>;
    }
}

class Zd5 extends React.Component {
    constructor() {
        super();
        this.state = {
            mass_zd5: ["Київ", "Одеса", "Вінниця", "Чернівці"],
            checked: [false, false, false, false]
        };
    }

    handleChange(index, event) {
        this.state.mass_zd5[index] = event.target.value;
        this.setState({mass_zd5: this.state.mass_zd5});
    }

    handleCheckedChangeOn(index, event) {
        this.state.checked[index] = true;
        this.setState({checked: this.state.checked});
    }

    handleCheckedChangeOff(index, event) {
        this.state.checked[index] = false;
        this.setState({checked: this.state.checked});
    }

    render() {
        const text = this.state.mass_zd5.map((item, index) => {
            return <li key={index}
                       onClick={this.handleCheckedChangeOn.bind(this, index)}
                       onMouseLeave={this.handleCheckedChangeOff.bind(this, index)}>
                {item}
                {this.state.checked[index] ?
                    <input name="lang"
                           value={this.state.mass_zd5[index]}
                           onChange={this.handleChange.bind(this, index)}/>
                    : ""}

            </li>;
        });
        return <ul>
            {text}
        </ul>;
    }
}

class Zd6 extends React.Component {
    constructor() {
        super();
        this.state = {
            users_zd6: [
                {name: 'Микола', age: 30},
                {name: 'Василь', age: 40},
                {name: 'Петро', age: 50},
            ],
            checked: [false, false, false, false, false, false]
        };
    }

    handleChangeName(index, event) {
        this.state.users_zd6[index].name = event.target.value;
        this.setState({users_zd6: this.state.users_zd6});
    }

    handleChangeAge(index, event) {
        this.state.users_zd6[index].age = event.target.value;
        this.setState({users_zd6: this.state.users_zd6});
    }

    handleCheckedChangeOn(index, event) {
        this.state.checked[index] = true;
        this.setState({checked: this.state.checked});
    }

    handleCheckedChangeOff(index, event) {
        this.state.checked[index] = false;
        this.setState({checked: this.state.checked});
    }


    render() {
        const text = this.state.users_zd6.map((item, index) => {
            var index2 = index + 3;
            return <tr>
                <td onClick={this.handleCheckedChangeOn.bind(this, index)}
                    onMouseLeave={this.handleCheckedChangeOff.bind(this, index)}>
                    {this.state.checked[index] ?
                        <input name="lang"
                               value={this.state.users_zd6[index].name}
                               onChange={this.handleChangeName.bind(this, index)}
                               style={{width: 70}}
                        />
                        : item.name
                    }
                </td>
                <td onClick={this.handleCheckedChangeOn.bind(this, index2)}
                    onMouseLeave={this.handleCheckedChangeOff.bind(this, index2)}>
                    {this.state.checked[index2] ?
                        <input name="lang"
                               value={this.state.users_zd6[index].age}
                               onChange={this.handleChangeAge.bind(this, index)}
                               style={{width: 25}}
                        />
                        : item.age
                    }
                </td>

            </tr>;
        });
        return <table id={"id1"}>
            {text}
        </table>;
    }
}

class Zd7 extends React.Component {
    constructor() {
        super();
        this.state = {
            mass_zd7: ["tour1", "tour2", "tour3"],
            option_zd7: -1
        };
    }

    handleRadioChange(event) {
        this.setState({option_zd7: event.target.value});
    }

    render() {
        const text = this.state.mass_zd7.map((item, index) => {
            return <div>
                {item}
                <input
                    name="lang" type="radio" value={index}
                    checked={this.state.option_zd7 == index}
                    onChange={this.handleRadioChange.bind(this)}
                />
            </div>;
        });
        return <div>
            {text}
            <p>Ваш вибір: {this.state.mass_zd7[this.state.option_zd7]}</p>
        </div>;
    }
}

class Note extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <div style={{border: "1px solid black", padding: "20px", paddingTop: "0px"}}>
            <h2 align={"center"}>{this.props.Note_title}</h2>
            <p>{this.props.Note_text}</p>
        </div>;
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            checked: false,
            mass1: ["Київ", "Одеса", "Вінниця", "Чернівці"],
            options: [true, false, false, false],
            employers_list: [
                ["Stas", "Shevchenko", 5600, true],
                ["Mykhailo", "Handabura", 10500, true],
                ["Andriy", "Zelenskiy", 200500, true],
                ["Volodymyr", "Zelenskiy", 0, true]
            ],
            text_list: [
                ["Hello", true],
                ["My name", true],
                ["Misha", true]
            ],
            note_list: [],
            state_sort: false,
            sorted_employers_list: [],
            select_state: "Укр",
            day_weeks: [
                ["Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота", "Неділя"],
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            ]
        };
        this.state.sorted_employers_list = this.state.employers_list;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleCheckboxChange(index, event) {
        this.state.options[index] = !this.state.options[index];
        this.setState({options: this.state.options});

    }

    handleCheckboxChange2(index, event) {
        this.state.employers_list[index][3] = !this.state.employers_list[index][3];
        this.setState({employers_list: this.state.employers_list});
    }

    handleCheckboxChange3(index, event) {
        this.state.text_list[index][1] = !this.state.text_list[index][1];
        this.setState({text_list: this.state.text_list});
    }

    createNote(event) {
        this.state.note_list.push(<Note Note_title={"Zagolovok"} Note_text={this.state.value}/>);
        this.setState({note_list: this.state.note_list})
    }

    sortTableByNameOrSurname(byName = true) {
        var by = byName ? 0 : 1;
        console.log("sort by ", by + 1);
        this.state.state_sort = !this.state.state_sort;
        var my_state_sort = this.state.state_sort;
        this.state.sorted_employers_list.sort(function (a, b) {
            if (a[by] < b[by]) {
                return my_state_sort ? -1 : 1;
            }
            if (a[by] > b[by]) {
                return my_state_sort ? 1 : -1;
            }
            return 0;
        });
        this.setState({state_sort: this.state.state_sort})
    }

    sortTableByInt() {
        console.log("sort by 3");
        this.state.state_sort = !this.state.state_sort;
        var my_state_sort = this.state.state_sort;
        this.state.sorted_employers_list.sort(function (a, b) {
            return my_state_sort ? a[2] - b[2] : b[2] - a[2];
        });
        this.setState({state_sort: this.state.state_sort}) // all broken (через state_sort)
    }

    handleSelectChange(event) {
        this.setState({select_state: event.target.value});
    }


    render() {
        const li_list = this.state.mass1.map((item, index) => {
            return <li key={index}>
                {this.state.options[index] ? <s>{item}</s> : item}
                <input
                    type="checkbox"
                    checked={this.state.options[index]}
                    onChange={this.handleCheckboxChange.bind(this, index)}
                />
            </li>;
        });

        var sum_zarplat = 0;
        const employers_table = this.state.employers_list.map((item, index) => {
            sum_zarplat += item[3] ? item[2] : 0;
            return <tr key={index}>
                <td style={{border: "1px solid black"}}>{item[0]}</td>
                <td style={{border: "1px solid black"}}>{item[1]}</td>
                <td style={{border: "1px solid black"}}>{item[2]}</td>
                <td style={{border: "1px solid black"}}>
                    <input
                        type="checkbox"
                        checked={this.state.employers_list[index][3]}
                        onChange={this.handleCheckboxChange2.bind(this, index)}
                    />
                </td>
            </tr>;
        });

        const text3zd = this.state.text_list.map((item, index) => {
            return <div>
                <input
                    type="checkbox"
                    checked={this.state.text_list[index][1]}
                    onChange={this.handleCheckboxChange3.bind(this, index)}
                />
                {item[1] ? <p>{item[0]}</p> : ""}
            </div>;
        });

        const notes = this.state.note_list.map((item, index) => {
            return <div>
                {item}
                <br/>
            </div>;
        });

        const table_employes = this.state.sorted_employers_list.map((item, index) => {
            return <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
            </tr>;
        });

        const option_day_weks = this.state.day_weeks[this.state.select_state == "Укр" ? 0 : 1].map((item, index) => {
            return <option>
                {item}
            </option>;
        });


        return (
            <div>
                1
                <ul>
                    {li_list}
                </ul>
                <hr/>

                2
                <table style={{border: "1px solid black"}}>
                    {employers_table}
                    {sum_zarplat}
                </table>
                <hr/>

                3
                {text3zd}
                <hr/>

                4
                <User/>
                <hr/>

                5
                <Zd5/>
                <hr/>

                6
                <Zd6/>
                <hr/>

                7
                <Zd7/>
                <hr/>

                8
                <br/>
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.createNote.bind(this)}>Створити нотатку</button>
                <hr/>
                {notes}
                <hr/>

                9
                <table>
                    <tr>
                        <td onClick={this.sortTableByNameOrSurname.bind(this, true)}> Ім'я</td>
                        <td onClick={this.sortTableByNameOrSurname.bind(this, false)}> Прізвище</td>
                        <td onClick={this.sortTableByInt.bind(this)}> Зарплата</td>
                    </tr>
                    {table_employes}
                </table>
                <hr/>

                10
                <br/>
                <select value={this.state.select_state} onChange={this.handleSelectChange.bind(this)}>
                    <option>Укр</option>
                    <option>Eng</option>
                </select>

                <select>
                    {option_day_weks}
                </select>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
