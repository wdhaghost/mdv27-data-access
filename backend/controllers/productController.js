import * as Product from '../models/product.js';
export const getAllProduct = (req, res) => {
  Product.getAllProduct((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const getProductById = (req, res) => {
  Product.getProductById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(results[0]);
  });
};

export const createProduct = (req, res) => {
  const product = req.body;
  Product.createProduct(product, (err, results) => {
    if (err && err.message.includes("La catégorie doit contenir uniquement des lettres")) {
      return res.status(400).json({ error: err.message });
    }
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Produit créé', id: results.insertId });
  });
};

export const updateProduct = (req, res) => {
  const product = req.body;
  Product.updateProduct(product, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Produit mis à jour' });
  });
};

