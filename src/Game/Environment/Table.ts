import { Color3, CreateBox, StandardMaterial } from "@babylonjs/core";
import { injectable } from "inversify";

@injectable()
export default class Table {
  constructor() {
    const backGround = CreateBox("backGround");
    backGround.scaling.set(6, 0.1, 3);
    backGround.position.y = -0.1;
    const backGroundMat = new StandardMaterial("backGroundMat");
    backGroundMat.diffuseColor = new Color3(1, 0.4, 0.4);
    backGround.material = backGroundMat;

    const walls1 = CreateBox("walls1");
    walls1.scaling.set(6, 0.1, 0.2);
    walls1.position.z = 1.5;
    const walls1Mat = new StandardMaterial("walls1Mat");
    walls1Mat.diffuseColor = new Color3(0.4, 0.4, 1);
    walls1.material = walls1Mat;

    const walls2 = CreateBox("walls2");
    walls2.scaling.set(6, 0.1, 0.2);
    walls2.position.z = -1.5;
    const walls2Mat = new StandardMaterial("walls2Mat");
    walls2Mat.diffuseColor = new Color3(0.4, 0.4, 1);
    walls2.material = walls2Mat;

    const bottom = CreateBox("bottom");
    bottom.scaling.set(0.2, 0.1, 3);
    bottom.position.x = -3;
    const bottomMat = new StandardMaterial("bottomMat");
    bottomMat.diffuseColor = new Color3(0.4, 1, 0.4);
    bottom.material = bottomMat;

    const top = CreateBox("top");
    top.scaling.set(0.2, 0.1, 3);
    top.position.x = 3;
    const topMat = new StandardMaterial("topMat");
    topMat.diffuseColor = new Color3(0.4, 1, 0.4);
    top.material = topMat;
  }
}
