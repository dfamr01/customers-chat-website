import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";

interface GenericTableProps<T> {
  rows: T[];
  columns: GridColDef[];
  filter: string;
  filterLabel: string;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchMoreRows: () => Promise<T[]>;
  page: number;
  onPageChange: (newPage: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
  totalRows: number;
}

const DataTable = <T extends { id: number }>({
  rows,
  columns,

  fetchMoreRows,
  page,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalRows,
}: GenericTableProps<T>) => {
  const [loading, setLoading] = useState(false);

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
      pageSizeOptions={[5, 10, 25]}
      paginationModel={{ page, pageSize: rowsPerPage }}
      onPaginationModelChange={handlePaginationModelChange}
      loading={loading}
    />
  );
};

export default DataTable;
