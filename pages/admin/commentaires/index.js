// import { createTheme } from "@mui/material";
import Layout from "../components/layout";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function Commentaire() {
  const [editIndex, setEditIndex] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [commentaires, setCommentaires] = useState([
    [
      "1",
      "J'aimerais que d'autres couleurs soient disponible pour ce telephone",
      "2024-06-01",
      "1",
    ],
    ["2", "Puis je avoir une réduction ?", "2024-06-01", "2"],
    [
      "3",
      "J'aimerais que d'autres couleurs soient disponible pour ce telephone",
      "2024-06-01",
      "6",
    ],
    [
      "4",
      "J'aimerais que d'autres couleurs soient disponible pour ce telephone",
      "2024-06-01",
      "7",
    ],
    [
      "5",
      "J'aimerais que d'autres couleurs soient disponible pour ce telephone",
      "2024-06-02",
      "8",
    ],
    [
      "6",
      "J'aimerais que d'autres couleurs soient disponible pour ce telephone",
      "2024-06-02",
      "9",
    ],
    [
      "7",
      "J'aimerais que d'autres couleurs soient disponible pour ce telephone",
      "2024-06-02",
      "10",
    ],
  ]);

  const handleEdit = (rowIndex) => {
    setEditIndex(rowIndex);
    setEditDialogOpen(true);
  };

  const handleDelete = (rowIndex) => {
    const newCommentaires = commentaires.filter(
      (commentaires, index) => index !== rowIndex
    );
    setCommentaires(newCommentaires);
  };

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
      name: "Contenu",
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
    {
      name: "ID_Précommande",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    // {
    //   name: "Actions",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     empty: true,
    //     setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
    //     customBodyRender: (value, tableMeta, updateValue) => (
    //       <div>
    //         <IconButton
    //           sx={{ color: "green" }}
    //           onClick={() => handleEdit(tableMeta.rowIndex)}
    //         >
    //           <EditIcon />
    //         </IconButton>
    //         <IconButton
    //           sx={{ color: "red" }}
    //           onClick={() => handleDelete(tableMeta.rowIndex)}
    //         >
    //           <DeleteIcon />
    //         </IconButton>
    //       </div>
    //     ),
    //   },
    // },
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
        <div className="w-full">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Liste des Commentaires"}
              data={commentaires}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </Layout>
  );
}
