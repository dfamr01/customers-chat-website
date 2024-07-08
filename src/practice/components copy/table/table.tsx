const TableComponent = ({ headers = [], data = [] }) => {
  return (
    <div>
      <table style={{ backgroundColor: "red" }}>
        <thead>
          <tr>
            {headers.map((col) => {
              const { headerName, cellKey } = col;
              return <th key={cellKey}>{headerName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((cell) => {
            return (
              <tr key={cell.id}>
                {headers.map(({ cellKey, action }) => {
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
