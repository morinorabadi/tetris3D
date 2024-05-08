import { Vector3, HemisphericLight, Color3 } from "@babylonjs/core";
import { injectable } from "inversify";

@injectable()
export default class Lights {
  constructor() {
    const hemispheric = new HemisphericLight(
      "hemispheric",
      new Vector3(0, -1, 0)
    );
    hemispheric.intensity = 0.3;
    hemispheric.groundColor = Color3.White()
    hemispheric.groundColor = Color3.White()
  }
}
