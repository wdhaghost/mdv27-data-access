import os
import platform

# Détection du système d'exploitation
if platform.system() == "Windows":
    # Commande adaptée pour Windows
    command = 'docker exec -i mysql_db sh -c "exec mysql -uroot -p\"example\"" < ./scriptSql/plateformecentrale_phpmyadmin.sql'
else:
    # Commande adaptée pour Linux
    command = "sudo docker exec -i mysql_db sh -c 'exec mysql -uroot -p\"example\"' < ./scriptSql/plateformecentrale_phpmyadmin.sql"

# Exécution de la commande
os.system(command)
print("Le script est terminé. Appuyez sur Entrée pour quitter.")
input()