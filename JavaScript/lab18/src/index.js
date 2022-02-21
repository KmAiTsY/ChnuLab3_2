import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        //Запишемо дані в стейт:
        var random_boolean = Math.random() < 0.5;
        console.log(random_boolean);
        this.state = {show: random_boolean, name: 'Іван', age: 25, showText: false, names : ['Коля', 'Вася', 'Петя'], hrefs: [
                {href: '1.html', text: 'посилання 1'},
                {href: '2.html', text: 'посилання 2'},
                {href: '3.html', text: 'посилання 3'},
            ]
        };
    }
    ShowMessage() {
        alert('hello');
    }
    ShowName() {
        alert(this.state.name);
    }
    ChangeName() {
        this.setState({name: 'Коля', age: 30});
    }
    ShowText() {
        if(this.state.showText)
            this.setState({showText: !this.state.showText});
        else
            this.setState({showText: !this.state.showText});
    }
    //Виведемо дані з стейту:
    render() {
        const list = this.state.names.map((item, index) => {
            return <li key={index}>{item} - {index+1}</li>;
        });
        const links = this.state.hrefs.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.text}</a></li>;
        });

        if (this.state.showText) {
            var message = <p>ім'я: {this.state.name}, вік: {this.state.age}</p>;
            var textBtn = 'Сховати';
        }
        else
            var textBtn = 'Показати';
        return <div>
            <div>
                ім’я: {this.state.name}, вік: {this.state.age}
            </div>
            <div>
                <button onClick={this.ShowMessage}>Натисни на мене</button>
            </div>
            <div>
                <button onClick={this.ShowName.bind(this)}>Як мене звати?</button>
            </div>
            <div>
                <p>имя: {this.state.name}, вік: {this.state.age}</p>
                <button onClick={this.ChangeName.bind(this)}>змінити ім’я і вік</button>
            </div>
            <div>
                <p>{this.state.show ? 'Привіт ' + this.state.name: 'Пока ' + this.state.name}</p>
            </div>
            <div>
                {message}
                <button onClick={this.ShowText.bind(this)}>{textBtn}</button>
            </div>
            <ul>
                {list}
            </ul>
            <ul>
                {links}
            </ul>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));