import * as React from "react";
import { render } from "@testing-library/react";
import SignIn from "../components/Sign In Page/SignIn";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";

describe("SignIn", () => {
  it("matches the snapshot", () => {
    const store = createStore(reducer, middleware);

    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
