import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    getText() {
        return <p>текст</p>;
    }
    getNum1() {
        return 1;
    }
    getNum2() {
        return 2;
    }
    render() {
        const text = 'текст';
        const textp = <p>текст</p>;
        const text1 = <p>текст1</p>;
        const text2 = <p>текст2</p>;
        const attr = "block";
        const str = "block";
        const css = {
            color: 'green',
            border: '1px solid red',
            borderRadius: '30px',
        };
        var random_boolean = Math.random() < 0.5;
        console.log(random_boolean);
        if (random_boolean) {
            var textb = 'текст 1';
        } else {
            var textb = 'текст 2';
        }
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const list = arr.map(function(item, index) {
            return <li key={index}>{item}</li>;
        })
        const text10 = this.getText();
        return (
            <div>
                1<div>1текст</div>
                <hr/>
                2<div>2{text}</div>
                <hr/>
                3<div>3{textp}</div>
                <hr/>
                4<div>4{text1}<p>!!!</p>{text2}</div>
                <hr/>
                5<div id = {attr}>текст</div>
                <hr/>
                6<div class = {str}>текст</div>
                <hr/>
                7<div style={css}>текст</div>
                <hr/>
                8<div>{textb}</div>
                <hr/>
                9<div><ul>{list}</ul></div>
                <hr/>
                10<div>{text10}</div>
                <hr/>
                11<div>текст { this.getNum1() + this.getNum2() }</div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));

