import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import DataTable from "../../../../shared/components/DataTable";
import { Box, Button, TextField } from "@mui/material";
import { selectCallsState } from "../../customer-service-store/customer-service.selectors";
import { connect } from "react-redux";
import { CallController } from "../../customer-service-controller/customer-service.controller";
import ChatMessagesModal from "../ChatMessagesModal";
import { Call } from "../../../../shared/interfaces/shared.interface";
interface CustomerServiceChatContainerProps {
  calls: Call[];
}

const CustomerServiceChatContainer: React.FC<
  CustomerServiceChatContainerProps
> = ({ calls }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectUserCall, setSelectUserCall] = useState<string>(null);

  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const callsEnriched = useMemo(() => {
    return Object.values(calls).map((call) => ({
      ...call,
      timestamp: new Date(call.timestamp).toLocaleString(),
      totalMessages: call.messages.length,
      lastMessage: call.messages[call.messages.length - 1]?.message || "",
    }));
  }, [calls]);

  const fetchChats = async () => {
    const callController = new CallController();

    await callController.getAllCalls();
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
      renderCell: (params) => {
        const onClick = () => {
          setSelectUserCall(params.row.email);
          setModalOpen(true);
        };
        return (
          <Button variant="contained" onClick={onClick}>
            Open
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <ChatMessagesModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        chat={calls[selectUserCall]}
      />
      <Box
        style={{ marginRight: "auto" }}
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <TextField
          label="filter by email"
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
          // fetchMoreRows={fetchMoreRows}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          totalRows={callsEnriched.length}
        />
      </Box>
    </>
  );
};
function mapStateToProps(state) {
  return {
    calls: selectCallsState(state),
  };
}

const Component = connect(mapStateToProps)(CustomerServiceChatContainer);
export default Component;
