import { CreateBox, Scene } from "@babylonjs/core";
import { inject, injectable } from "inversify";
import { TYPES } from "../Ioc/Types";

@injectable()
export default class Table {
  constructor(@inject(TYPES.Scene) scene: Scene) {
    const testBox = CreateBox("test");
    testBox.scaling.set(1, 1, 1);
    scene.onBeforeRenderObservable.add(() => {
      testBox.rotation.x += 0.02;
      testBox.rotation.z += 0.05;
    });
  }
}
