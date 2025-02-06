Lancement des bases de données :
Etape 1 : Télécharger docker et docker compose
Etape 2 : Exécuter la commande : docker compose up -d // Pour lancer les conteneurs

-----------------------------------------------------
Initialisation de la base de données MySql

Exécuter le script Python avec droit administrateur ou bien exécuter les commandes suivantes :
 - commande Windows : docker exec -i mysql_db sh -c "exec mysql -uroot -p\"example\"" < ./scriptSql/plateformecentrale_phpmyadmin.sql
 - commande Linux : sudo docker exec -i mysql_db sh -c ''exec mysql -uroot -p"example"'' < ./scriptSql/plateformecentrale_phpmyadmin.sql