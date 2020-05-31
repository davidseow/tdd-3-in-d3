import React from "react";

const handleClick = () => {
  // console.log("clicked");
};

const defaultValue = { test: "value" };

const CreateForm = () => (
  <div>
    <h2>Create form</h2>
    <label htmlFor="createTree" className="createTree">
      Create tree
    </label>
    <textarea
      name="createTree"
      id="createTree"
      cols="30"
      rows="10"
      defaultValue={JSON.stringify(defaultValue, 0, 2)}
    />

    <button type="submit" onClick={handleClick}>
      Create
    </button>
  </div>
);

export default CreateForm;
