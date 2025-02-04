import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/routes.js';

const app = express();

app.use(express.json());


app.use('/api', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
