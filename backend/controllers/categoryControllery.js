import * as Category from '../models/category.js';

export const getAllCategories= (req, res) => {
  Category.getAllCategories((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const getCategoryById = (req, res) => {
  Category.getCategoryById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    res.json(results[0]);
  });
};

