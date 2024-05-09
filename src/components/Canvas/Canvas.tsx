import "reflect-metadata";
import { useEffect, useRef } from "react";
import createContainer from "../../Game/Ioc/createContainer";
import { Container } from "inversify";

function Canvas() {
  const gameContainer = useRef<Container>();

  useEffect(() => {
    if (gameContainer.current) return;

    gameContainer.current = createContainer();
    // return () => {
    // gameContainer.current?.unbindAll();
    // };
  }, []);

  return (
    <canvas id="game-canvas" style={{ width: "100vw", height: "100vh" }} />
  );
}

export default Canvas;
