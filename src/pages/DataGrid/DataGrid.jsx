import React, { useMemo } from "react";
import "./DataGrid.css";
import MaterialReactTable from "material-react-table";
import { userData } from "../../data";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getDatabase, ref, onValue } from "firebase/database";

const DataGrid = () => {
  const db = getDatabase();
  const dbRef = ref(db, "/users");
  const [users, setUsers] = React.useState([]);

  onValue(
    dbRef,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        // ...
        console.log(childKey, childData);
      });
    },
    {
      onlyOnce: false,
    }
  );

  const columns = [
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
  ];
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
          {userData && columns && (
            <MaterialReactTable columns={columns} data={userData} />
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

export default DataGrid;
