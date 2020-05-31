import React from "react";
import { render } from "@testing-library/react";
import DisplayPanel from "./DisplayPanel";

describe("DisplayPanel", () => {
  it("Should render", () => {
    const { container } = render(<DisplayPanel />);
    expect(container).toMatchSnapshot();
  });
});
