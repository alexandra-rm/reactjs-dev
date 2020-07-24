import { matrixGenerator, resizeMatrix } from "@/utils/arrayUtils";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Engine } from "./Engine";
import { ControlAction } from "./components";

export interface Creature {
  isAlive: boolean;
}

export const ALIVE: Creature = {
  isAlive: true,
};

export const DEAD: Creature = {
  isAlive: false,
};

export type Population = Creature[][];

export enum GameStatus {
  Paused,
  Running,
  Stopped,
}

export interface GameSettings {
  xDimension: number;
  yDimension: number;
  fillingPercentage: number;
  status: GameStatus;
  speed: number;
}

export interface GameState {
  settings: GameSettings;
  creatures: Population;
}

export interface CreatureCoordinates {
  x: number;
  y: number;
}

const initialState: GameState = {
  settings: {
    xDimension: 10,
    yDimension: 10,
    fillingPercentage: 0,
    status: GameStatus.Stopped,
    speed: 10,
  },
  creatures: matrixGenerator<Creature>(10, 10, DEAD),
};

const changeCreaturesSize = (
  creatures: Population,
  xDimension: number,
  yDimension: number
): Creature[][] => {
  return resizeMatrix(creatures, xDimension, yDimension, DEAD);
};

export const gameStore = createSlice({
  name: "game",
  initialState,
  reducers: {
    applySettings: (state, _: AnyAction) => state,
    changeSettings: (state, action: PayloadAction<GameSettings>) => {
      state.settings = action.payload;
    },
    resizeCreatures: (state, _: AnyAction) => {
      state.creatures = changeCreaturesSize(
        state.creatures,
        state.settings.xDimension,
        state.settings.yDimension
      );
    },
    generateNewCreatures: (state, _: AnyAction) => {
      const { xDimension, yDimension, fillingPercentage } = {
        ...state.settings,
      };
      state.creatures = Engine.firstGeneration(
        xDimension,
        yDimension,
        fillingPercentage
      );
    },
    newGeneration: (state, _: AnyAction) => {
      state.creatures = Engine.nextGeneration(state.creatures);
    },
    toggleCreatureState: (
      state,
      action: PayloadAction<CreatureCoordinates>
    ) => {
      const { x, y } = action.payload;
      state.creatures = state.creatures.map((row, rowIndex) => {
        if (rowIndex == x) {
          return row.map((value, inRowIndex) => ({
            isAlive: inRowIndex == y ? !value.isAlive : value.isAlive,
          }));
        }
        return row;
      });
    },
    executeControlAction: (__, _: PayloadAction<ControlAction>) => {},
    run: (state, _: AnyAction) => {
      state.settings.status = GameStatus.Running;
    },
    stop: (state, _: AnyAction) => {
      state.settings.status = GameStatus.Paused;
    },
    reset: (__, _: AnyAction) => initialState,
    faster: (state, _: AnyAction) => {
      if (state.settings.speed > 0) {
        state.settings.speed -= 1;
      }
    },
    slower: (state, _: AnyAction) => {
      if (state.settings.speed < 20) {
        state.settings.speed += 1;
      }
    },
    normal: (state, _: AnyAction) => {
      state.settings.speed = 10;
    },
  },
});