
import db from '../config/mysql.js';

export const getAllCategories = (callback) => {
    db.query('SELECT * from categories',callback)
};

export const getCategoryById = (id,callback) => {
    
    db.query('SELECT * from categories WHERE categories_id =? ',[id],callback)
};

