import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import DataTable from "../../../../shared/components/DataTable";
import { Box, Button, TextField } from "@mui/material";
import { selectCallsValuesArrayState } from "../../customer-service-store/customer-service.selectors";
import { connect } from "react-redux";
import callController from "../../customer-service-controller/customer-service.controller";

interface Chat {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  timestamp: string;
  lastMessage: string;
  totalMessages: number;
}

const CustomerServiceChatContainer: React.FC = ({ calls }) => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const callsEnriched = useMemo(() => {
    return calls.map((call) => ({
      ...call,
      timestamp: new Date(call.timestamp).toLocaleString(),
      totalMessages: call.messages.length,
      lastMessage: call.messages.at(-1)?.message || "",
    }));
  }, [calls]);

  const fetchChats = async () => {
    await callController.getAllCalls();

    // // Simulate fetching chats data
    // return Array.from({ length: limit }, (_, i) => ({
    //   id: start + i + 1,
    //   firstName: `First ${start + i + 1}`,
    //   lastName: `Last ${start + i + 1}`,
    //   email: `customer${start + i + 1}@example.com`,
    //   address: "123-456 5th Ave New York NY 10001 USA",
    //   timestamp: new Date(
    //     Date.now() - Math.floor(Math.random() * 10000000000)
    //   ).toISOString(),
    //   lastMessage: `Last message ${start + i + 1}`,
    //   totalMessages: Math.floor(Math.random() * 20) + 1,
    // }));
  };

  useEffect(() => {
    fetchChats();
  }, []);

  // useEffect(() => {
  //   setChats(fetchChats(0, rowsPerPage));
  // }, [rowsPerPage]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setPage(0);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // setChats(fetchChats(newPage * rowsPerPage, rowsPerPage));
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    // setChats(fetchChats(0, newRowsPerPage));
  };

  const fetchMoreRows = async () => {
    console.log("🚀 ~ fetchMoreRows ~ fetchMoreRows:", fetchMoreRows);

    const moreChats = fetchChats((page + 1) * rowsPerPage, rowsPerPage);
    setPage(page + 1);
    return moreChats;
  };

  const filteredChats = useMemo(() => {
    return callsEnriched.filter((chat) => chat.email.includes(filter));
  }, [callsEnriched, filter]);

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 300 },
    {
      field: "timestamp",
      headerName: "Start Date",
      width: 200,
      sortable: true,
    },
    { field: "lastMessage", headerName: "Last Message", width: 200 },
    { field: "totalMessages", headerName: "Total Messages", width: 150 },
    {
      field: "actions",
      headerName: "All messages",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => alert(`Opening messages for ${params.row.email}`)}
        >
          Open
        </Button>
      ),
    },
  ];
  console.log("🚀 ~ filteredChats:", filteredChats);

  return (
    <>
      <Box
        style={{ marginRight: "auto" }}
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <TextField
          label="Email"
          value={filter}
          onChange={handleFilterChange}
          variant="outlined"
        />
      </Box>
      <Box style={{ flex: 1, height: 400, width: "100%" }}>
        <DataTable
          rows={filteredChats}
          columns={columns}
          filterLabel="Email"
          fetchMoreRows={fetchMoreRows}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          totalRows={1000} // Replace with actual total number of rows
        />
      </Box>
    </>
  );
};
function mapStateToProps(state) {
  return {
    calls: selectCallsValuesArrayState(state),
  };
}

const Component = connect(mapStateToProps)(CustomerServiceChatContainer);
export default Component;
