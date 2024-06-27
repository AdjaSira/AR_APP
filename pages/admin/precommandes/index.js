// import { createTheme } from "@mui/material";
import Layout from "../components/layout";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ModifierPrecommande from "../modificationPrecommande";

export default function Precommande() {
  const [editIndex, setEditIndex] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [precommandes, setPrecommandes] = useState([
    [
      "1",
      "Iphone 15",
      "Moussa Diouf",
      "moussa.diouf@gmail.com",
      "771569867",
      "2024-06-01",
      "2024-06-05",
      "En attente",
    ],
    [
      "2",
      "Galaxy S24",
      "Aminata Traoré",
      "amina2@gmail.com",
      "778907645",
      "2024-06-02",
      "2024-06-06",
      "Validé",
    ],
    [
      "3",
      "Galaxy S24",
      "Sophie Mbaye",
      "sombaye@gmail.com",
      "774352323",
      "2024-06-03",
      "2024-06-07",
      "Refusé",
    ],
    [
      "4",
      "Iphone 15 Pro",
      "Doudou Ndiaye",
      "ndiayedoudou@gmail.com",
      "776548756",
      "2024-06-04",
      "2024-06-08",
      "En validation",
    ],
    [
      "5",
      "Galaxy Z Fold 5",
      "Lauriane Faye",
      "laufaye@gmail.com",
      "776665898",
      "2024-06-05",
      "2024-06-09",
      "En attente",
    ],
    [
      "6",
      "Iphone 15 Pro",
      "Fadel Dioum",
      "fadeldioum@gmail.com",
      "779867898",
      "2024-06-06",
      "2024-06-10",
      "Validé",
    ],
    [
      "7",
      "Galaxy Z-Flip",
      "Baba Ndiaye",
      "babsndiaye23@gmail.com",
      "775674567",
      "2024-06-07",
      "2024-06-11",
      "Refusé",
    ],
    [
      "8",
      "Galaxy Z Fold 5",
      "Macodou Gueye",
      "macodou8@gmail.com",
      "779806452",
      "2024-06-08",
      "2024-06-12",
      "En validation",
    ],
    [
      "9",
      "Iphone 15 Pro",
      "Astou Ndiaye",
      "ndiayeAsta28@gmail.com",
      "778899001",
      "2024-06-09",
      "2024-06-13",
      "En attente",
    ],
    [
      "10",
      "Galaxy Z Fold 5",
      "Ousmane Mané",
      "ousmane90@gmail.com",
      "772345698",
      "2024-06-10",
      "2024-06-14",
      "Validé",
    ],
  ]);

  const handleEdit = (rowIndex) => {
    setEditIndex(rowIndex);
    setEditDialogOpen(true);
  };

  const handleDelete = (rowIndex) => {
    const newPrecommandes = precommandes.filter(
      (precommandes, index) => index !== rowIndex
    );
    setPrecommandes(newPrecommandes);
  };

  const handleSave = (updatedPrecommande) => {
    const newPrecommandes = precommandes.map((precommande, index) =>
      index === editIndex ? updatedPrecommande : precommande
    );
    setProducts(newPrecommandes);
  };

  //fonction pour faire des tags status sur les status des précommandes
  const renduStatus = (statut) => {
    let color;
    switch (statut) {
      case "En attente":
        color = "default";
        break;

      case "Validé":
        color = "success";
        break;
      case "Refusé":
        color = "error";
        break;
      case "En validation":
        color = "warning";
        break;
      default:
        color = "default";
    }
    return <Chip label={statut} color={color} />;
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
      name: "Nom Produit",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Nom Client",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Email Client",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Telephone",
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
      name: "Date de Modification",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Statut",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
        customBodyRender: (value) => renduStatus(value),
      },
    },
    {
      name: "Actions",
      options: {
        filter: true,
        sort: false,
        empty: true,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
        customBodyRender: (value, tableMeta, updateValue) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              sx={{ color: "Blue" }}
              onClick={() => handleEdit(tableMeta.rowIndex)}
            >
              <VisibilityIcon />
            </IconButton>
            <IconButton
              sx={{ color: "green" }}
              onClick={() => handleEdit(tableMeta.rowIndex)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              sx={{ color: "red" }}
              onClick={() => handleDelete(tableMeta.rowIndex)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
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
        <div className="">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Liste des Précommandes"}
              data={precommandes}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
      <ModifierPrecommande
        open={isEditDialogOpen}
        handleClose={() => setEditDialogOpen(false)}
        precommande={editIndex !== null ? precommandes[editIndex] : []}
        handleSave={handleSave}
      />
    </Layout>
  );
}
