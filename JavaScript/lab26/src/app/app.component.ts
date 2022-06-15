import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  numbers2 = [1, 2, 3, 4, 5];
  i = -1;
  indexNames = -1;

  names = ["Микола", "Василь", "Петро"];
  names2 = ["Аня", "Валя", "Маша"];

  numbers3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  countries = {
    Україна: ["Київ", "Львів"],
    Польща: ["Варшава", "Лодзь"],
    Великобританія: ["Лондон", "Манчестер"],
  };

  //-----------

  arrLang = ["html", "css", "js", "php"];

  ngOnInit(): void {}

  reverseArray() {
    this.numbers2 = this.numbers2.reverse();
  }

  changeNames() {
    if (this.indexNames < 2) {
      this.indexNames += 1;
      let item = this.names2.shift()?.toString();
      this.names.push(`${item}`);
    }
    if (this.indexNames == 2) {
      this.names.sort();
    }
  }

  addPlus() {
    if (this.i < 3) {
      this.i += 1;
      let item = this.arrLang[this.i] + "+";
      this.arrLang[this.i] = item;
    }
  }
}
