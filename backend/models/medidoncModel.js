// models/medidoncModel.js
import mongoose from "mongoose";

const medidoncSchema = new mongoose.Schema({
  p_name: {
    type: String, // Le nom du produit
    required: true, // Champ obligatoire
  },
  p_description: {
    type: String, // Description du produit
    required: true,
  },
  p_last_update: {
    type: Date, // Date de la dernière modification du produit
    default: Date.now, // Par défaut, la date actuelle
  },
  p_status: {
    type: String, // État du produit
    enum: ["En stock", "Rupture de stock"], // Valeurs autorisées
    required: true,
  },
  p_seller: {
    id: {
      type: Number, // Identifiant unique du revendeur
      required: true,
    },
    name: {
      type: String, // Nom du revendeur
      required: true,
    },
    creation_date: {
      type: Date, // Date de création du revendeur
      required: true,
    },
  },
});

export default mongoose.model("produits_medidonc", medidoncSchema);
