import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "../components/Home Page/Home";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";

let store;
beforeAll(() => {
  store = createStore(reducer, middleware);
});

describe("Home", () => {
  it("will match snapshot", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("will show Unanswered tab as selected", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );

    const tab = component.getByTestId("unansweredTab");
    expect(tab.classList.contains("selected-tab")).toBe(true);
  });

  it("will show Answered tab as selected", () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );

    const tab = component.getByTestId("answeredTab");
    fireEvent.click(tab);

    expect(tab.classList.contains("selected-tab")).toBe(true);
  });
});
