Docker :
Le docker-compose contient 3 conteneurs :
 - une BDD mongoDB exposé sur le port : 27017 (utiliser le nom de BDD "projetProduits" dans les .env)
 - une BDD mysql exposé sur le port : 3306
 - un PHPMyAdmin exposé sur le port : 8080

-----------------------------------------------------
Lancement des bases de données :

Etape 1 : Télécharger docker et docker compose
Etape 2 : Pour lancer les conteneurs, exécuter la commande : docker compose up -d

-----------------------------------------------------
Initialisation de la base de données MySql

Exécuter le script Python avec droit administrateur ou bien exécuter les commandes suivantes :
 - commande Windows : docker exec -i mysql_db sh -c "exec mysql -uroot -p\"example\"" < ./scriptSql/plateformecentrale_phpmyadmin.sql
 - commande Linux : sudo docker exec -i mysql_db sh -c ''exec mysql -uroot -p"example"'' < ./scriptSql/plateformecentrale_phpmyadmin.sql


Le script plateformecentrale_phpmyadmin.sql contient : 
 - Un utilisateur :
                 - utilisateur : userAPI
                 - mot de passe : APIPassword       
 - Une base de données : plateformecentrale


 Erreur potentielle : 
  - Il est possible que le lancement du script de création des tables échouent si il est exécuté juste après avoir lancé les conteneurs pour la première fois.

