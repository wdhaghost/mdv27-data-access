import * as Reseller from '../models/reseller.js';

export const getAllReseller = (req, res) => {
  Reseller.getAllReseller((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const getResellerById = (req, res) => {
  Reseller.getResellerById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: 'Revendeur non trouvé' });
    res.json(results[0]);
  });
};

export const createReseller = (req, res) => {
  const reseller = req.body;
  Reseller.createReseller(reseller, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Revendeur créé', id: results });
  });
};

export const updateReseller = (req, res) => {
  const reseller= req.body;
  Reseller.updateReseller(reseller, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Revendeur mis à jour' });
  });
};

export const deleteReseller = (req, res) => {
  const reseller = req.body
  Reseller.deleteReseller(reseller, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Revendeur supprimé' });
  });
};
