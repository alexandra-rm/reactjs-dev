import { AppState } from "@/AppStore";
import { AuthStatus, authStore } from "@/Areas/Authentication/authStore";
import { shallow, mount } from "enzyme";
import React from "react";
import configureMockStore from "redux-mock-store";
import { Header } from "./Header";
import { Provider } from "react-redux";

const store = configureMockStore<AppState>([])({
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
});

const mockHistory = { push: jest.fn() };
jest.mock("react-router-dom", () => ({
  useHistory: () => mockHistory,
}));

jest.mock("api/auth");

describe("Header", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("should call logOutUser function prop when Logout button clicked", () => {
    const sut = mount(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    sut.find("Styled(button)").simulate("click");

    expect(store.getActions()).toEqual([authStore.actions.logout()]);
  });

  it("should redirect to /login when Logout button clicked", () => {
    const sut = mount(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    sut.find("Styled(button)").simulate("click");

    expect(mockHistory.push).toHaveBeenCalledWith("/login");
  });
});
