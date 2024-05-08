import { inject, injectable } from "inversify";
import { TYPES } from "./Ioc/Types";
import { ArcRotateCamera, Engine, Scene, Vector3 } from "@babylonjs/core";
import Lights from "./Environment/Lights";
import Table from "./Environment/Table";

@injectable()
export default class Game {
  camera!: ArcRotateCamera;

  @inject(TYPES.Lights) private lights!: Lights;
  @inject(TYPES.Table) private Table!: Table;

  constructor(
    @inject(TYPES.Engine) public engine: Engine,
    @inject(TYPES.Scene) public scene: Scene
  ) {
    this.camera = new ArcRotateCamera("main", 0, 0, 8, Vector3.Zero());

    this.engine.runRenderLoop(() => this.scene.render());

    this.setupEventListeners();
  }

  private setupEventListeners() {
    window.addEventListener("resize", this.onResize);
  }

  private onResize = () => {
    this.engine.resize();
  };
}
