import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
import router from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
