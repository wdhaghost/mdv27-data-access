

import Medidonc from "../models/medidoncModel.js";
import GamEZ from "../models/gamezModel.js";
import SportSalut from "../models/sportsalutModel.js";


export const getAllMedidonc = async (req, res) => {
  try {
    const medidoncDocs = await Medidonc.find();
    res.status(200).json(medidoncDocs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les documents de la collection GamEZ
export const getAllGamez = async (req, res) => {
  try {
    const gamezDocs = await GamEZ.find();
    res.status(200).json(gamezDocs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les documents de la collection SportSalut
export const getAllSportSalut = async (req, res) => {
  try {
    const sportsalutDocs = await SportSalut.find();
    res.status(200).json(sportsalutDocs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
