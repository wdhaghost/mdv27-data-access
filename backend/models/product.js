
import db from '../config/mysql.js';

export const getAllProduct = (callback) => {
    db.query('SELECT * FROM produits',callback)
};

export const getProductById = (id,callback) => {
    db.query('SELECT * FROM produits WHERE id = ?', [id], callback);
};

export const createProduct = (product,callback) => {
  const { nom, description, prix, categorie, revendeur } = product;

  if (categorie && !/^[A-Za-z0-9]+$/.test(categorie)) {
    return callback(new Error("La catégorie doit contenir uniquement des lettres et des chiffres."));
  }
  
  const query = 'CALL CreateProduit(?, ?, ?, ?, ?)';
    
  db.query(query, [nom, description, prix, categorie.toLowerCase(), revendeur], callback);
};

export const updateProduct = (id, product,callback) => {
  const {id, nom, description, prix, statut } = product;

  if (categorie && !/^[A-Za-z0-9]+$/.test(categorie)) {
    return callback(new Error("La catégorie doit contenir uniquement des lettres et des chiffres."));
  }
  
  const query = 'CALL ModifyProduit(?,?, ?, ?, ?)';
    
  db.query(query, [id,nom, description, prix,statut], callback);
    
};

export const deleteProduct = (id,callback) => {
    db.query('CALL CreateProduit(nom,descrioption,prix,categorie,revendeur',callback)
};