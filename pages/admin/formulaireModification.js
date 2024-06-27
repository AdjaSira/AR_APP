import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const ModifierProduit = ({ open, handleClose, produit, handleSave }) => {
  const [formData, setFormData] = useState(produit);

  useEffect(() => {
    setFormData(produit);
  }, [produit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = [...prevData];
      switch (name) {
        case "Nom":
          updatedData[0] = value;
          break;
        case "Quantité":
          updatedData[1] = value;
          break;
        case "Catégorie":
          updatedData[2] = value;
          break;
        case "Statut":
          updatedData[3] = value;
          break;
        case "Ajouté Par":
          updatedData[4] = value;
          break;
        case "Date de l'Ajout":
          updatedData[5] = value;
          break;
        case "Modifié Par":
          updatedData[6] = value;
          break;
        case "Date de derniere modification":
          updatedData[7] = value;
          break;
        default:
          break;
      }
      return updatedData;
    });
  };

  const handleSubmit = () => {
    handleSave(formData);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Modifier le Produit</DialogTitle>
      <DialogContent>
        <TextField
          label="Nom"
          name="Nom"
          value={formData[0]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Quantité"
          name="Quantité"
          value={formData[1]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Catégorie"
          name="Catégorie"
          value={formData[2]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Statut"
          name="Statut"
          value={formData[3]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Ajouté Par"
          name="Ajouté Par"
          value={formData[4]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Date de l'Ajout"
          name="Date de l'Ajout"
          value={formData[5]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Modifié Par"
          name="Modifié Par"
          value={formData[6]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Date de derniere modification"
          name="Date de derniere modification"
          value={formData[7]}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handleSubmit}>Enregistrer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModifierProduit;
