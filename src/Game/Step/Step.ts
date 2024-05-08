import { Engine, Observable, Scene } from "@babylonjs/core";
import { inject, injectable } from "inversify";
import { TYPES } from "../Ioc/Types";

@injectable()
export default class Step {
  onStepObservable: Observable<undefined> = new Observable();

  @inject(TYPES.Engine) engine!: Engine;
  constructor(@inject(TYPES.Scene) scene: Scene) {
    scene.onBeforeRenderObservable.add(this.onBeforeRender.bind(this));
  }

  private readonly STEP_AMOUNT = 500;
  private elapsedTime = 0;
  private onBeforeRender() {
    const delta = this.engine.getDeltaTime();
    this.elapsedTime += delta;
    while (this.elapsedTime > this.STEP_AMOUNT) {
      this.elapsedTime -= this.STEP_AMOUNT;
      this.onStepObservable.notifyObservers(undefined);
    }
  }
}
