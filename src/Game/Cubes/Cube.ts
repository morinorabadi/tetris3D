import { CreateBox, Mesh, Vector3 } from "@babylonjs/core";
import { injectable } from "inversify";
import { CUBE_SIZE } from "../../constants/index.constant";

@injectable()
export default class Cube {
  mesh: Mesh;
  constructor() {
    // todo add random name
    this.mesh = CreateBox("cube");
    this.mesh.scaling = this.mesh.scaling.scale(CUBE_SIZE * 0.9);    
  }

  updatePosition(pos: Vector3) {
    this.mesh.position.copyFrom(pos);
  }
}
