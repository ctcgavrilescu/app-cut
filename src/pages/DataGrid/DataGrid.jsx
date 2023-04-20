import React, { useMemo } from "react";
import "./DataGrid.css";
import MaterialReactTable from "material-react-table";
import { userData } from "../../data";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const DataGrid = () => {
  const columns = useMemo(() => [
    {
      accesorKey: "name.firstName",
      header: "First Name",
    },
    {
      accesorKey: "name.lastName",
      header: "Last Name",
    },
    {
      accesorKey: "address",
      header: "Address",
    },
    {
      accesorKey: "city",
      header: "City",
    },
    {
      accesorKey: "state",
      header: "State",
    },
  ]);
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
    })
  );
  return (
    <>
      <div className='table-container'>
        <ThemeProvider theme={theme}>
          <MaterialReactTable columns={columns} data={userData} />
        </ThemeProvider>
      </div>
    </>
  );
};

export default DataGrid;
