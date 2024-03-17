import { Board } from "./Board";

const board = new Board();
board.addColumn("Todo");
board.addColumn("Doing");
board.addColumn("Done");
console.log(board);
