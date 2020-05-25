import React from "react";
// import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import CreateForm from "./index";

describe("CreateForm", () => {
  it("Should display required fields", () => {
    const { getByRole } = render(<CreateForm />);

    expect(getByRole("button")).toHaveTextContent(/create/i);
  });
});
