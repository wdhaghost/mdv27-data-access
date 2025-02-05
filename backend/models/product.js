
import db from '../config/mysql.js';

export const getAllProduct = (callback) => {
    db.query('SELECT * FROM produits',callback)
};

export const getProductById = (id,callback) => {
    db.query('SELECT * FROM produits WHERE produits_id = ?', [id], callback);
};

export const createProduct = (product,callback) => {
  const { nom, description, prix, categorie, revendeur } = product;
  if (categorie && !/^[A-Za-z]+$/.test(categorie)) {
    return callback(new Error("La catégorie doit contenir uniquement des lettres."));
  }
  if (revendeur && !/^[A-Za-z]+$/.test(revendeur)) {
    return callback(new Error("Le revendeur doit contenir uniquement des lettres."));
  }
  
  const query = 'CALL CreateProduit(?, ?, ?, ?, ?)';
  db.query(query, [nom, description, prix, categorie.toLowerCase(), revendeur.toLowerCase()], callback);
};

export const updateProduct = (product,callback) => {
  const {id, nom, description, prix, statut } = product;
  
  const query = 'CALL ModifyProduit(?,?, ?, ?, ?)';
    
  db.query(query, [id,nom, description, prix, statut], callback);
    
};