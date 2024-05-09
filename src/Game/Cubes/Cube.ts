import { CreateBox, Mesh, Vector3 } from "@babylonjs/core";
import { injectable } from "inversify";

@injectable()
export default class Cube {
  mesh: Mesh;
  constructor() {
    // todo add random name
    this.mesh = CreateBox("cube");
    this.mesh.scaling.set(0.09, 0.09, 0.09);
  }

  updatePosition(pos: Vector3) {
    this.mesh.position.copyFrom(pos);
  }
}
