import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name: string = "Михайло";
  surname: string = "Гандабура";
  age: number = 20;

  langs = {
    name: "Василь",
    surname: "Гандабура",
    age: 20,
  };

  countries = {
    Варшава: "Польща",
    Вільнюс: "Литва",
    Київ: "Україна",
  };

  workers = [
    { name: "Микола", age: 30, salary: 400 },
    { name: "Василь", age: 31, salary: 500 },
    { name: "Петро", age: 32, salary: 600 },
  ];

  arrLang = ["html", "css", "js", "php"];

  ngOnInit(): void {}

  changeName() {
    this.name = "Dmytro";
  }

  change(el: any) {
    if (el == 1) this.name = "Mykhailo";
    if (el == 2) this.surname = "Handabura";
    if (el == 3) this.age = 20;
  }

  changeSql() {
    var myIndex = this.arrLang.indexOf("php");
    this.arrLang[myIndex] = "sql";
  }

  addToArr() {
    this.arrLang.push("sql");
  }

  addToStart() {
    this.arrLang.unshift("sql");
  }

  deleteHtml() {
    var myIndex = this.arrLang.indexOf("html");
    if (this.arrLang[myIndex] == 'html')
      this.arrLang.splice(myIndex, 1);
  }

  deletePhp() {
    var myIndex = this.arrLang.indexOf("php");
    if (this.arrLang[myIndex] == 'php')
      this.arrLang.splice(myIndex, 1);
  }
}
