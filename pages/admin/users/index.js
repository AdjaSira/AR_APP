// import { createTheme } from "@mui/material";
import Layout from "../components/layout";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Users() {
  const [utilisateurs, setUtilisateurs] = useState([
    ["1", "Vignon", "Alice", "alicevignon@gmail.com", "2024-06-01"],
    ["2", "Doe", "John", "johndoe@gmail.com", "2024-06-01"],
    ["3", "Diop", "Mar", "marjoop@gmail.com", "2024-06-01"],
    ["4", "Diouf", "Ibrahima", "ibrahimadiouf@gmail.com", "2024-06-01"],
    ["5", "Thiaw", "Thiaba", "thiabathiaw@gmail.com", "2024-06-01"],
  ]);

  const columns = [
    {
      name: "ID",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Nom",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Prénom",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Email",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Date de Création",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
  ];

  const options = {
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15],
    download: false,
    print: false,
    viewColumns: false,
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "Poppins",
      },
    });

  return (
    <Layout>
      <div className=" py-10 min-h-screen grid place-items-center">
        <div className="w-full ">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Liste des utilisateurs"}
              data={utilisateurs}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </Layout>
  );
}
