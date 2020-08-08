import { AppState } from "@/AppStore";
import { AuthState, AuthStatus } from "@/features/Authentication";
import { GameSettings, GameStatus } from "@/features/Game/gameStore";
import configureMockStore from "redux-mock-store";

export const create = {
    defaultAuthState: () => ({
        loginError: undefined,
        status: AuthStatus.not_authenticated,
        userName: undefined,
    }),
    gameSettings: (overrides?: Partial<GameSettings>): GameSettings => ({
        xDimension: 10,
        yDimension: 10,
        fillingPercentage: 0,
        speed: 10,
        status: GameStatus.Stopped,
        ...overrides
    }),
    authState: (overrides?: Partial<AuthState>) => ({
        loginError: undefined,
        userName: "John Doe",
        status: AuthStatus.authenticated,
        ...overrides
    }),
    appState: (overrides?: Partial<AppState>): AppState => ({
        auth: create.authState(),
        game: {
            creatures: [],
            settings: create.gameSettings()
        },
        ...overrides
    }),
    mockStore: (stateOverrides?: Partial<AppState>) =>
        configureMockStore<AppState>([])({
            auth: create.defaultAuthState(),
            game: {
                creatures: [],
                settings: create.gameSettings(),
            },
            ...stateOverrides
        }),
}