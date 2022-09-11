import React, { useEffect, useState } from "react";

function Form({ contact, setContact }) {
  const [form, setForm] = useState({ fullname: "", phone: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(contact);
    setForm({ fullname: "", phone: "" });
  }, [contact]);

  const addForm = () => {
    if (form.fullname === "" || form.phone === "") {
      return false;
    }
    setContact([...contact, form]);
  };
  return (
    <div>
      <input
        name="fullname"
        type="text"
        value={form.fullname}
        onChange={onChangeInput}
      />
      <input
        name="phone"
        type="text"
        value={form.phone}
        onChange={onChangeInput}
      />
      <button onClick={addForm}>Add</button>
    </div>
  );
}

export default Form;
