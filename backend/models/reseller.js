
import db from '../config/mysql.js';

export const getAllReseller = (callback) => {
    db.query('SELECT * from revendeurs',callback)
};

export const getResellerById = (id,callback) => {
    
    db.query('SELECT * from revendeurs WHERE revendeurs_id =? ',[id],callback)
};

export const createReseller = (reseller,callback) => {
    const {name}= reseller
    if (name && !/^[A-Za-z]+$/.test(name)) {
      return callback(new Error("Le revendeur doit contenir uniquement des lettres."));
    }
    
    const query = 'CALL CreateRevendeur(?)';
    db.query(query, [name], callback);
};

export const updateReseller = (reseller,callback) => {
    const {id,name}= reseller
    if (name && !/^[A-Za-z]+$/.test(name)) {
      return callback(new Error("Le revendeur doit contenir uniquement des lettres."));
    }
    
    const query = 'CALL ModifyRevendeur(?,?)';
    db.query(query, [id,name], callback);
};

export const deleteReseller = (reseller,callback) => {
    console.log(reseller)
    const {id} = reseller
    const query = 'CALL DeleteRevendeur(?)';
    db.query(query,[id],callback)
};