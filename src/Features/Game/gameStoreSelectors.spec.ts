import { AppState } from "@/AppStore";
import { AuthStatus } from "@/Features/Authentication";
import { GameSettings } from "./gameStore";
import { settingsSelector } from "./gameStoreSelectors";

describe("gameStoreSelectors", () => {
  const settings: GameSettings = {
    xDimension: 2,
    yDimension: 3,
    fillingPercentage: 0.5,
  };
  const appState: AppState = {
    auth: {
      status: AuthStatus.authenticated,
      userName: "Bob",
      loginError: undefined,
    },
    game: {
      creatures: [],
      settings,
    },
  };
  it("should select settings", () => {
    expect(settingsSelector(appState)).toEqual(settings);
  });
});
