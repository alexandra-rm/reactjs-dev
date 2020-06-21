import { AppState } from "@/AppStore";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { AuthInProgressScreen } from "screens/AuthInProgressScreen";
import { ForbiddenScreen } from "screens/ForbiddenScreen";
import { AuthStatus } from "./authStore";
import { WithAuthentication } from "./WithAuthentication";

jest.mock("screens/ForbiddenScreen");

const storeDefaultState: AppState = {
  auth: {
    loginError: undefined,
    status: AuthStatus.not_authenticated,
    userName: undefined,
  },
  game: {
    creatures: [],
    settings: {
      fillingPercentage: 0,
      xDimension: 0,
      yDimension: 0,
    },
  },
};
const mockStore = configureMockStore<AppState>([]);

describe("WithAuthentication", () => {
  it("should render Access Denied Screen if user is not authenticated", () => {
    const store = mockStore(storeDefaultState);
    const sut = mount(
      <Provider store={store}>
        <WithAuthentication>
          <div>Hello there!</div>
        </WithAuthentication>
      </Provider>
    );

    expect(sut.find(ForbiddenScreen)).toHaveLength(1);
  });

  it("should render Auth In Progress Screen if user is authenticating", () => {
    const store = mockStore({
      ...storeDefaultState,
      auth: {
        ...storeDefaultState.auth,
        status: AuthStatus.in_progress,
        userName: "anonymous",
      },
    });
    const sut = mount(
      <Provider store={store}>
        <WithAuthentication>
          <div>Hello there!</div>
        </WithAuthentication>
      </Provider>
    );

    expect(sut.find(AuthInProgressScreen)).toHaveLength(1);
  });
});
