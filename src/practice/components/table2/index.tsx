/* eslint-disable react/prop-types */
import React from "react";
import TableData from "./tableData";

const Table2 = ({ headers, data }) => {
  if (!headers?.length) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          {headers?.map((header) => {
            return <th key={header.caption}>{header.caption}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <TableData headers={headers} data={data} />
      </tbody>
    </table>
  );
};
export default Table2;
