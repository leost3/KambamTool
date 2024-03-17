import { Column } from "./Column";
export class Board {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.columns = [];
  }

  addColumn(name) {
    this.columns.push(new Column(name));
  }
}
