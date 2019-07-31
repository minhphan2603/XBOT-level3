import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
export default function Search({ onChange }) {
  return (
    <Form>
      <FormGroup>
        <Input
          className="my-2"
          type="text"
          placeholder="input video's name"
          onChange={onChange}
        />
      </FormGroup>
    </Form>
  );
}
