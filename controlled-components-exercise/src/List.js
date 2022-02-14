import React from "react";

const List = ({ items }) => {
  return (
    <React.Fragment>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </React.Fragment>
  );
};

export default List;
