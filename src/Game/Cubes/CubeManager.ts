import { inject, injectable } from "inversify";
import { TYPES } from "../Ioc/Types";
import { Engine } from "@babylonjs/core";
import Step from "../Step/Step";

@injectable()
export default class CubeManager {
  @inject(TYPES.Engine) engine!: Engine;
  constructor(@inject(TYPES.Step) public step: Step) {
    this.step.onStepObservable.add(() => console.log("step"));
  }
}
