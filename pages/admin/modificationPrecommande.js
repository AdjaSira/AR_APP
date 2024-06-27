import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const ModifierPrecommande = ({
  open,
  handleClose,
  precommande,
  handleSave,
}) => {
  const [formData, setFormData] = useState(precommande);

  useEffect(() => {
    setFormData(precommande);
  }, [precommande]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = [...prevData];
      switch (name) {
        case "Nom Produit":
          updatedData[0] = value;
          break;
        case "Nom Client":
          updatedData[1] = value;
          break;
        case "Email Client":
          updatedData[2] = value;
          break;
        case "Telephone":
          updatedData[3] = value;
          break;
        case "Date de Création":
          updatedData[4] = value;
          break;
        case "Date de Modification":
          updatedData[5] = value;
          break;
        case "Statut":
          updatedData[6] = value;
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
      <DialogTitle>Modifier la Précommande</DialogTitle>
      <DialogContent>
        <TextField
          label="Nom Produit"
          name="Nom Produit"
          value={formData[0]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Nom Client"
          name="Nom Client"
          value={formData[1]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email Client"
          name="Email Client"
          value={formData[2]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Telephone"
          name="Telephone"
          value={formData[3]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Date de Création"
          name="Date de Création"
          value={formData[4]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Date de Modification"
          name="Date de Modification"
          value={formData[5]}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Statut"
          name="Statut"
          value={formData[6]}
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

export default ModifierPrecommande;
