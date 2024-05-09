import { Container, interfaces } from "inversify";
import { TYPES } from "./Types";
import Game from "../Game";
import { Engine, Scene } from "@babylonjs/core";
import Lights from "../Environment/Lights";
import Table from "../Environment/Table";
import Step from "../Step/Step";
import CubeManager from "../Cubes/CubeManager";
import Cube from "../Cubes/Cube";

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

  container.bind<Lights>(TYPES.Lights).to(Lights);
  container.bind<Table>(TYPES.Table).to(Table);

  // Cube Stuff
  container.bind<Cube>(TYPES.Cube).to(Cube);

  container
    .bind<interfaces.Factory<Cube>>(TYPES.CubeFactory)
    .toAutoFactory<Cube>(TYPES.Cube);

  container.bind<Step>(TYPES.Step).to(Step).inSingletonScope();

  container
    .bind<CubeManager>(TYPES.CubeManager)
    .to(CubeManager)
    .inSingletonScope();

  container.bind<Game>(TYPES.Game).to(Game).inSingletonScope();

  container.get<Game>(TYPES.Game);
  return container;
}
