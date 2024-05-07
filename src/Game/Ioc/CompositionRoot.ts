import { Container } from "inversify";
import { TYPES } from "./Types";
import Game from "../Game";

export default function createContainer() {
  console.log("createContainer");

  const container = new Container();
  container.bind<Game>(TYPES.Game).to(Game).inSingletonScope();
  return container;
}
