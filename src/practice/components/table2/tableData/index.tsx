/* eslint-disable react/prop-types */
import React from "react";
import CellData from "../cellData";

const TableData = ({ headers, data }) => {
  const renderCellContent = (header, el) => {
    if (header.render) {
      return header.render(el);
    }
    return el[header.dataKey];
  };
  return (
    <>
      {data?.map((el) => {
        return (
          <tr key={el.id}>
            {headers.map((header) => {
              return (
                <td key={header.caption}>{renderCellContent(header, el)}</td>
              );
            })}
            {/* {headers.map((header) => {
              return (
                <CellData
                  key={header.caption}
                  header={header}
                  dataElement={el}
                />
              );
            })} */}

            {/* {headers.map((header) => {
              if (header.render) {
                return <td key={header.caption}>{header.render(el)}</td>;
              }
              return <td key={header.dataKey}>{el[header.dataKey]}</td>;
            })} */}
          </tr>
        );
      })}
    </>
  );
};
export default TableData;
