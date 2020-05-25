import React from "react";

const CreateForm = () => (
  <div>
    <h2>Create form</h2>
    <label htmlFor="createTree">Create tree</label>
    <input type="text" name="createTree" id="createTree" defaultValue="" />
    <button type="submit">Create</button>
  </div>
);

export default CreateForm;
