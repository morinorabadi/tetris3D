import { Color3, CreateBox, StandardMaterial } from "@babylonjs/core";
import { injectable } from "inversify";
import {
  CUBE_SIZE,
  WALL_SIZE,
  CUBE_WIDTH_COUNT,
  CUBE_HEIGHT_COUNT,
} from "../../constants/index.constant";
@injectable()
export default class Table {
  constructor() {
    const backGround = CreateBox("backGround");

    const height = CUBE_SIZE * CUBE_HEIGHT_COUNT;
    const width = CUBE_SIZE * CUBE_WIDTH_COUNT;

    backGround.scaling.set(height, CUBE_SIZE, width);
    backGround.position.y = -CUBE_SIZE;
    const backGroundMat = new StandardMaterial("backGroundMat");
    backGroundMat.diffuseColor = new Color3(1, 0.4, 0.4);
    backGround.material = backGroundMat;

    const walls1 = CreateBox("walls1");
    walls1.scaling.set(height, CUBE_SIZE, WALL_SIZE);
    walls1.position.z = width / 2 + WALL_SIZE / 2;
    const walls1Mat = new StandardMaterial("walls1Mat");
    walls1Mat.diffuseColor = new Color3(0.4, 0.4, 1);
    walls1.material = walls1Mat;

    const walls2 = CreateBox("walls2");
    walls2.scaling.set(height, CUBE_SIZE, WALL_SIZE);
    walls2.position.z = -(width / 2 + WALL_SIZE / 2);
    const walls2Mat = new StandardMaterial("walls2Mat");
    walls2Mat.diffuseColor = new Color3(0.4, 0.4, 1);
    walls2.material = walls2Mat;

    const bottom = CreateBox("bottom");
    bottom.scaling.set(WALL_SIZE, CUBE_SIZE, width + WALL_SIZE * 2);
    bottom.position.x = -(width + WALL_SIZE / 2);
    const bottomMat = new StandardMaterial("bottomMat");
    bottomMat.diffuseColor = new Color3(0.4, 1, 0.4);
    bottom.material = bottomMat;

    const top = CreateBox("top");
    top.scaling.set(WALL_SIZE, CUBE_SIZE, width + WALL_SIZE * 2);
    top.position.x = width + WALL_SIZE / 2;
    const topMat = new StandardMaterial("topMat");
    topMat.diffuseColor = new Color3(0.4, 1, 0.4);
    top.material = topMat;
  }
}
