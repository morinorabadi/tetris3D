import { Container } from "inversify";
import { TYPES } from "./Types";
import Game from "../Game";
import { Engine, Scene } from "@babylonjs/core";

export default function createContainer() {
  console.log("createContainer");

  const container = new Container();

  container
    .bind<HTMLCanvasElement>(TYPES.Canvas)
    .toConstantValue(
      document.getElementById("game-canvas") as HTMLCanvasElement
    );

  container.bind<Engine>(TYPES.Engine).toConstantValue(
    new Engine(container.get(TYPES.Canvas), true, {
      deterministicLockstep: true,
      lockstepMaxSteps: 4,
    })
  );

  container
    .bind<Scene>(TYPES.Scene)
    .toConstantValue(new Scene(container.get(TYPES.Engine)));

  container.bind<Game>(TYPES.Game).to(Game).inSingletonScope();

  container.get<Game>(TYPES.Game);
  return container;
}
