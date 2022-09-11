import React, { useState } from "react";
import Form from "./form/Form";
import List from "./list/List";

const Contacts = () => {
  const [contact, setContact] = useState([]);

  return (
    <div>
      <Form contact={contact} setContact={setContact} />
      <List contact={contact} />
    </div>
  );
};

export default Contacts;
