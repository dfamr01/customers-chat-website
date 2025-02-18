import React from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";

interface GenericTableProps<T> {
  rows: T[];
  columns: GridColDef[];
  filter?: string;
  filterLabel: string;
  onFilterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchMoreRows?: () => Promise<T[]>;
  page: number;
  onPageChange: (newPage: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
  totalRows: number;
}

function DataTable<T>({
  rows,
  columns,
  // fetchMoreRows,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalRows,
}: GenericTableProps<T>) {
  // const [loading, setLoading] = useState(false);

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    if (model.page !== page) {
      onPageChange(model.page);
    }
    if (model.pageSize !== rowsPerPage) {
      onRowsPerPageChange(model.pageSize);
    }
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      paginationMode="server"
      rowCount={totalRows}
      pageSizeOptions={[25, 50, 100]}
      paginationModel={{ page, pageSize: rowsPerPage }}
      onPaginationModelChange={handlePaginationModelChange}
      // loading={loading}
    />
  );
}

export default DataTable;
