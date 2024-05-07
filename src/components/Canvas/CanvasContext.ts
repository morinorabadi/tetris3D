import { createContext, useContext } from "react";
import type AbstractGame from "~/game/Common/AbstractGame";

export const CanvasContext = createContext<{
  gameRef: React.MutableRefObject<AbstractGame | undefined>;
}>({} as never);

export function useCanvasContext() {
  const ctx = useContext(CanvasContext);
  return ctx;
}
