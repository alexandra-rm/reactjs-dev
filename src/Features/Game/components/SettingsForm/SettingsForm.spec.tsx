import { mount, shallow } from "enzyme";
import React from "react";
import { SettingsForm } from "./SettingsForm";

describe("SettingsForm", () => {
  const defaultInitialSettings = {
    xDimension: 10,
    yDimension: 10,
    fillingPercentage: 0,
  };

  it("should render", () => {
    const sut = shallow(
      <SettingsForm
        gameSettings={defaultInitialSettings}
        onSettingsSubmit={jest.fn()}
      />
    );

    expect(sut).toMatchSnapshot();
  });

  it.each`
    inputName              | value
    ${"xDimension"}        | ${"10"}
    ${"yDimension"}        | ${"20"}
    ${"fillingPercentage"} | ${"30"}
  `(
    "should change value to $value in $inputName input",
    ({ inputName, value }) => {
      const sut = mount(
        <SettingsForm
          gameSettings={defaultInitialSettings}
          onSettingsSubmit={jest.fn()}
        />
      );

      sut.find(`input[name="${inputName}"]`).simulate("change", {
        target: { value: value, name: inputName },
      });

      expect(sut.find(`input[name="${inputName}"]`).prop("value")).toBe(
        parseInt(value)
      );
    }
  );

  it("should call onSubmit with values from inputs", () => {
    const fakeOnSubmit = jest.fn();
    const sut = mount(
      <SettingsForm
        gameSettings={defaultInitialSettings}
        onSettingsSubmit={fakeOnSubmit}
      />
    );
    sut.find(`input[name="xDimension"]`).simulate("change", {
      target: { value: "10", name: "xDimension" },
    });
    sut.find(`input[name="yDimension"]`).simulate("change", {
      target: { value: "20", name: "yDimension" },
    });
    sut.find(`input[name="fillingPercentage"]`).simulate("change", {
      target: { value: "0", name: "fillingPercentage" },
    });

    sut.find("button").simulate("submit");

    expect(fakeOnSubmit).toHaveBeenCalledTimes(1);
    expect(fakeOnSubmit).toHaveBeenCalledWith({
      xDimension: 10,
      yDimension: 20,
      fillingPercentage: 0,
    });
  });

  it("should transform fillingPercentage from percents to fraction", () => {
    const fakeOnSubmit = jest.fn();
    const sut = mount(
      <SettingsForm
        gameSettings={defaultInitialSettings}
        onSettingsSubmit={fakeOnSubmit}
      />
    );
    sut.find(`input[name="fillingPercentage"]`).simulate("change", {
      target: { value: "60", name: "fillingPercentage" },
    });

    sut.find("button").simulate("submit");

    expect(fakeOnSubmit).toHaveBeenCalledTimes(1);
    expect(fakeOnSubmit).toHaveBeenCalledWith({
      ...defaultInitialSettings,
      fillingPercentage: 0.6,
    });
  });

  it("should transform fillingPercentage from fraction to percents when displaying", () => {
    const sut = mount(
      <SettingsForm
        gameSettings={{ ...defaultInitialSettings, fillingPercentage: 0.1 }}
        onSettingsSubmit={jest.fn()}
      />
    );
    const fillingPercentage = sut.find(`input[name="fillingPercentage"]`);

    expect(fillingPercentage.prop("value")).toBe(10);
  });
});
