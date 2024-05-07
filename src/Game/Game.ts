import { injectable } from "inversify";

@injectable()
export default class Game {
  constructor() {
    console.log("game is created");
  }
}
