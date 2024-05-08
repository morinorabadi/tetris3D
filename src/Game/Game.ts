import { inject, injectable } from "inversify";
import { TYPES } from "./Ioc/Types";
import {
  ArcRotateCamera,
  CreateBox,
  Engine,
  Scene,
  Vector3,
} from "@babylonjs/core";

@injectable()
export default class Game {
  camera!: ArcRotateCamera;
  constructor(
    @inject(TYPES.Engine) public engine: Engine,
    @inject(TYPES.Scene) public scene: Scene
  ) {
    this.camera = new ArcRotateCamera("main", 0, 0, 4, Vector3.Zero());

    const testBox = CreateBox("test");
    this.engine.runRenderLoop(() => {
      this.scene.render();
      testBox.rotation.y += 0.001;
      testBox.rotation.x += 0.002;
    });

    this.setupEventListeners();
  }

  private setupEventListeners() {
    window.addEventListener("resize", this.onResize);
  }

  private onResize = () => {
    this.engine.resize();
  };
}
