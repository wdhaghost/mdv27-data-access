// models/sportsalutModel.js
import mongoose from "mongoose";

const sportSalutSchema = new mongoose.Schema({
  nom_produit: {
    type: String,
    required: true,
  },
  description_produit: {
    type: String,
    required: true,
  },
  nom_revendeur: {
    type: String,
    required: true,
  },
  en_stock: {
    type: String, // État du stock
    enum: ["Oui", "Non"], // Valeurs autorisées
    required: true,
  },
  prix: {
    type: Number,
    required: true,
    // Setter qui calcule automatiquement le prix final en ajoutant 20% au prix d'achat
    set: function (value) {
      return value * 1.2;
    },
  },
});

export default mongoose.model("produits_sportsalut", sportSalutSchema);
