import { inject, injectable } from "inversify";
import { TYPES } from "../Ioc/Types";
import { Engine, Vector3 } from "@babylonjs/core";
import Step from "../Step/Step";
import Cube from "./Cube";
import { CUBE_SIZE } from "../../constants/index.constant";

@injectable()
export default class CubeManager {
  @inject(TYPES.Engine) engine!: Engine;
  @inject(TYPES.CubeFactory) cubeFactory!: () => Cube;

  constructor(@inject(TYPES.Step) public step: Step) {
    this.step.onStepObservable.add(this.onStep.bind(this));
  }

  test = 0;
  private onStep() {
    this.test += 1;
    const cube = this.cubeFactory();
    cube.updatePosition(new Vector3(this.test * CUBE_SIZE, 0, 0));
  }
}
