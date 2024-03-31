import React, { useEffect, useState } from "react";

export function mainTest() {}

// columns id , name ,userName

const TableComponent = ({ columns = [], cells = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col) => {
              const { headerName, cellKey } = col;
              return <th key={cellKey}>{headerName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cells.map((cell) => {
            return (
              <tr key={cell.id}>
                {columns.map(({ cellKey, action }) => {
                  if (action) {
                    return action(cell);
                  }
                  return <td>{cell[cellKey]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { TableComponent };
