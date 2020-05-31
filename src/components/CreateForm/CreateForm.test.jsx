import React from "react";
import { render } from "@testing-library/react";
import CreateForm from "./CreateForm";

describe("CreateForm", () => {
  it("Should display required fields", () => {
    const { getByRole, getByLabelText } = render(<CreateForm />);

    expect(getByLabelText(/create tree/i)).toBeVisible();
    expect(getByRole("button")).toHaveTextContent(/create/i);
  });

  it("Should set default", () => {
    const { getByLabelText } = render(<CreateForm />);
    const expected = { test: "value" };

    expect(getByLabelText(/create tree/i)).toHaveValue(
      JSON.stringify(expected, 0, 2)
    );
  });
});
