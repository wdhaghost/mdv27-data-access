# Projet Scolaire : Application CRUD en Node.js

Ce projet a été réalisé dans le cadre d'un cours de développement web. Il s'agit d'une application de gestion de produits qui permet d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) en utilisant Vue 3, Node.js, Express, MySQL et MongoDB.

## Installation

### Prérequis

- Node.js
- npm
- MySQL
- MongoDB

### Étapes d'installation

1. **Cloner le dépôt :**

   ```bash
   git clone 
   cd mdv27-data-access
   ```
2. **Installer les dépendances :**
    ```bash
   cd backend
   npm install
   cd ..
   cd frontend 
   npm install
   cd ..
   cd service 
   npm install

3. **Configurer les variables d'environnement :**
.env à copier dans /backend et /service 
```ìni
PORT=3000
# MySQL
MYSQL_HOST=localhost
MYSQL_USER=userAPI
MYSQL_PASSWORD=APIPassword
MYSQL_DB=plateformecentrale

# MongoDB
MONGODB_URI=mongodb://localhost:27017/nom_de_votre_db
````

4. **Importer le scrit SQL dans votre db (si vous utilisez pas docker):**

   Le fichier se trouve dans /database/scriptSql/plateformecentrale_phpmyadmin.sql
   Vous pouvez l'importer dans votre fichier local ou utliser la solution docker ou il y a un readme.
   
   Sinon voir readme dans /databases

## Utilisation
lancez les différents services :
```bash
 cd backend 
 npm start
 cd ..
 cd frontend
 npm run dev
 cd ..
 cd service
 node scheduler.js 
```

## Architecture du projet
```bash
backend/
├── config/
│   ├── mysql.js         # Configuration et connexion à MySQL
│   └── mongodb
├── controllers/.  #Dossier des contrôleurs
├── models/ # Modèles de données 
├── routes/
│   └── routes.js # Définition des endpoints de l'API
├── .env                 # Variables d'environnement (à créer)
├── server.js            # Point d'entrée de l'application
└── package.json         # Gestion des dépendances et scripts
service/
├── config/
│   └── mysql.js         # Configuration et connexion à MySQL
├── script.js   # Script d'import de mysql à mongo
└── scheduler.js # Script pour lancer le script d'import de façon périodique