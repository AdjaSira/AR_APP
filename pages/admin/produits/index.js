import { useState } from "react";
import Layout from "../components/layout";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModifierProduit from "../formulaireModification";
import AjouterProduit from "../formulaireAjout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import { Button, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Produit() {
  const [products, setProducts] = useState([
    [
      "Iphone 15",
      167,
      "Smartphone",
      "John",
      "2024-06-10",
      "Alice",
      "2024-06-11",
      "Disponible",
    ],
    [
      "Iphone 15 Pro",
      167,
      "Smartphone",
      "Alice",
      "2024-06-10",
      "John",
      "2024-06-11",
      "En rupture",
    ],
    [
      "Galaxy S24",
      167,
      "Smartphone",
      "John",
      "2024-06-10",
      "Alice",
      "2024-06-11",
      "En rupture",
    ],
    [
      "Galaxy Z Fold 5",
      167,
      "Smartphone",
      "Alice",
      "2024-06-10",
      "John",
      "2024-06-11",
      "Disponible",
    ],
    [
      "Galaxy Z-Flip",
      167,
      "Smartphone",
      "John",
      "2024-06-10",
      "Alice",
      "2024-06-11",
      "Disponible",
    ],
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);

  const handleDelete = (rowIndex) => {
    const newProducts = products.filter((product, index) => index !== rowIndex);
    setProducts(newProducts);
  };

  const handleEdit = (rowIndex) => {
    setEditIndex(rowIndex);
    setEditDialogOpen(true);
  };

  const handleSave = (updatedProduct) => {
    const newProducts = products.map((product, index) =>
      index === editIndex ? updatedProduct : product
    );
    setProducts(newProducts);
  };

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  //fonction pour faire des tags status sur les status des précommandes
  const renduStatus = (statut) => {
    let color;
    switch (statut) {
      case "Disponible":
        color = "success";
        break;
      case "En rupture":
        color = "error";
        break;
      default:
        color = "default";
    }
    return <Chip label={statut} color={color} />;
  };

  const columns = [
    {
      name: "Nom",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Quantité",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Catégorie",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },

    {
      name: "Ajouté Par",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Date de l'Ajout",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Modifié Par",
      options: {
        filter: true,
        sort: false,
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
      },
    },
    {
      name: "Date de derniere modification",
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
        setCellHeaderProps: () => ({ style: { fontWeight: "bold" } }),
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div style={{ display: "flex" }}>
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
      <div className="py-10 min-h-screen grid place-items-center">
        <div className="w-full max-w-7xl px-4">
          <ThemeProvider theme={getMuiTheme()}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => setAddDialogOpen(true)}
              sx={{ mb: 2 }}
            >
              Ajouter Produit
            </Button>
            <MUIDataTable
              title={"Liste des Produits"}
              data={products}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
      <ModifierProduit
        open={isEditDialogOpen}
        handleClose={() => setEditDialogOpen(false)}
        produit={editIndex !== null ? products[editIndex] : []}
        handleSave={handleSave}
      />
      <AjouterProduit
        open={isAddDialogOpen}
        handleClose={() => setAddDialogOpen(false)}
        handleSave={handleAdd}
      />
    </Layout>
  );
}
