import "reflect-metadata";
import { useEffect, useRef } from "react";
import createContainer from "../../Game/Ioc/CompositionRoot";
import { Container } from "inversify";

function Canvas() {
  const gameContainer = useRef<Container>();

  useEffect(() => {
    if (gameContainer.current) return;

    gameContainer.current = createContainer();
    return () => {
      gameContainer.current?.unbindAll();
    };
  }, []);

  return <></>;
}

export default Canvas;
