/* eslint-disable react/prop-types */
import React from "react";

const CellData = ({ header, dataElement }) => {
  console.log("🚀 ~ CellData ~ dataElement:", dataElement);
  console.log("🚀 ~ CellData ~ header:", header);

  if (header.render) {
    return <td key={header.caption}>{header.render(dataElement)}</td>;
  }
  return <td>{dataElement[header.dataKey]}</td>;
};
export default CellData;
