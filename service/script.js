import mongoose from "mongoose";
import connection from "./config/mysql.js"; // Import de la connexion MySQL
import dotenv from 'dotenv';
dotenv.config();

// Connexion à MongoDB
const URI = process.env.MONGODB_URI
await mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Connexion MongoDB réussie");

// Définition du schéma Medidonc
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
    default: Date.now, // Par défaut, prend la date actuelle lors de la création/modification
  },
  p_status: {
    type: String, // État du produit
    enum: ["En stock", "Rupture de stock"], // Liste de valeurs autorisées
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

// Définition du schéma GamEZ
const gamezSchema = new mongoose.Schema({
  product: {
    product_name: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
    },
    product_status: {
      type: String,
      required: true,
      enum: ["disponible", "indisponible"],
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_type: {
      type: String,
      required: true,
      enum: ["jeux_videos", "jeux_societe"],
    }
  },
  seller: {
    seller_name: {
      type: String,
      required: true,
    },
    seller_creation_date: {
      type: Date,
      required: true,
      default: new Date(),
    }
  }
});

gamezSchema.pre('save', function (next) {
  if (this.product.product_type === "jeux_videos") this.product.product_price *= 1.1
  else this.product.product_price *= 1.15;
  return next();
});
gamezSchema.pre('findOneAndUpdate', async function (next) {
  const oldProductPrice = this.get("product.product_price");
  const object = await this.model.findOne(this.getQuery());
  const hasProductPriceChanged = oldProductPrice != object.product.product_price;
  if (hasProductPriceChanged) {
      if (object.product_type === "jeux_videos") object.product.product_price = oldProductPrice * 1.1;
      else object.product.product_price = oldProductPrice * 1.15;
      object.save();
  }
  return next();
});

// Définition du schéma SportSalut
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
    // Calcule en auto le prix ex: prix_achat + 20%
    set: function (value) {
      return value * 1.2; // Ajoute 20% au prix d'achat
    },
  },
});

// Modèles Mongoose
const Medidonc = mongoose.model("produits_medidonc", medidoncSchema);
const GamEZ = mongoose.model("produits_gamez", gamezSchema);
const SportSalut = mongoose.model("produits_sportsalut", sportSalutSchema);

// Fonction pour transférer les produits Medidonc de MySQL vers MongoDB
function transfererProduitsMedidonc() {
  const rows = connection.query("CALL produits_medidonc;", (err,resultats) => {
    resultats[0].forEach(row => {
      const result = {
        p_name: row.p_name,
        p_description: row.p_description,
        p_last_update: row.p_date_modification,
        p_status: row.p_statut ? "En stock" : "Rupture de stock",
        p_seller: {
          id: row.id_revendeur,
          name: row.nom_revendeur,
          creation_date: row.creation_date_revendeur,
        },
      }
      Medidonc.insertOne(result);
      console.log(`produits insérés dans Medidonc`);
    });
  }); //Call de procédure
}

// Fonction pour transférer les produits GamEZ de MySQL vers MongoDB
function transfererProduitsGamez() { 
  const rows = connection.query("CALL produits_gamez;", (err,resultats) => {
    resultats[0].forEach(row => {
      const result = {
        product: {
          product_name: row.product_name,
          product_description: row.product_description,
          product_status: (row.product_status == 0) ? "indisponible" : "disponible",
          product_price: row.product_price,
          product_type: row.categorie,
        },
        seller: {
              seller_name: row.seller_name,
              seller_creation_date: row.seller_creation_date
        },
      }
      GamEZ.insertOne(result);
      console.log(`produits insérés dans gamez`);
    });
  }); //Call de procédure
}

// Fonction pour transférer les produits SportSalut de MySQL vers MongoDB
function transfererProduitsSportSalut() {
  const rows = connection.query("CALL produits_sportsalut;", (err,resultats) => {
    resultats[0].forEach(row => {
      const result = {
        nom_produit: row.nom_produit,
        description_produit: row.description_produit,
        nom_revendeur: row.nom_revendeur,
        en_stock: row.en_stock === 1 ? "Oui" : "Non",
        prix: row.prix,
      }
      SportSalut.insertOne(result);
      console.log(`produits insérés dans sportsalut`);
    });
  }); //Call de procédure
}

// Exécution des transferts

  Medidonc.collection.drop();
  SportSalut.collection.drop();
  GamEZ.collection.drop();

  transfererProduitsMedidonc();
  transfererProduitsGamez();
  transfererProduitsSportSalut();
