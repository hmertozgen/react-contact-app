import React, { useState } from "react";

const List = ({ contact }) => {
  const [filterText, setFilterText] = useState("");
  const filtered = contact.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Filter Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
