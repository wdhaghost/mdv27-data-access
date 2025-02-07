-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : jeu. 06 fév. 2025 à 14:43
-- Version du serveur : 9.2.0
-- Version de PHP : 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- CREATE DATABASE
CREATE DATABASE plateformecentrale;
USE plateformecentrale;

-- CREATE USER
CREATE USER 'userAPI'@'%' IDENTIFIED BY 'APIPassword';
GRANT SELECT, EXECUTE ON plateformecentrale.* TO 'userAPI'@'%';
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `plateformecentrale`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCategorie` (IN `nomCategorie` VARCHAR(64))   BEGIN
	INSERT INTO categories(nom, date_creation) VALUES (nomCategorie, DATE(NOW()));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateProduit` (IN `nomProduit` VARCHAR(64), IN `descriptionProduit` VARCHAR(255), IN `prixProduit` DECIMAL(10,2), IN `categorieNom` VARCHAR(64), IN `revendeurNom` VARCHAR(120))   BEGIN
	DECLARE IDProduit INT;
	DECLARE IDCategorie INT;	
	DECLARE IDRevendeur INT;

	INSERT INTO produits(nom, description, prix_achat, statut, date_creation) VALUES (nomProduit, descriptionProduit, prixProduit, TRUE, DATE(NOW()));

	SELECT LAST_INSERT_ID() into IDProduit;

	SELECT categories_id INTO IDCategorie from categories where categories.nom = categorieNom;
	IF (IDCategorie IS NULL) THEN
		CALL CreateCategorie(categorieNom);
		SELECT LAST_INSERT_ID() into IDCategorie;
	END IF;
	INSERT INTO produits_categories(produits_id, categories_id) VALUES (IDProduit, IDCategorie);

	SELECT revendeurs_id INTO IDRevendeur from revendeurs where revendeurs.nom = revendeurNom;
	IF (IDRevendeur IS NULL) THEN
		CALL CreateRevendeur(revendeurNom);
		SELECT LAST_INSERT_ID() into IDRevendeur;
	END IF;
	INSERT INTO produits_revendeurs(produits_id, revendeurs_id) VALUES (IDProduit, IDRevendeur);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateRevendeur` (IN `nomRevendeur` VARCHAR(64))   BEGIN
	INSERT INTO revendeurs(nom, date_creation) VALUES (nomRevendeur, DATE(NOW()));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteRevendeur` (IN `nomRevendeur` VARCHAR(64))   BEGIN
	DECLARE done INT DEFAULT FALSE;
	DECLARE value_to_delete VARCHAR(255);
	DECLARE IDRevendeur INT;
	DECLARE cur CURSOR FOR 
		SELECT produits_id 
		FROM produits_revendeurs
		WHERE revendeurs_id = IDRevendeur;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

	SELECT revendeurs_id INTO IDRevendeur from revendeurs where revendeurs.nom = nomRevendeur;
	IF (IDRevendeur IS NOT NULL) THEN

		OPEN cur;

		read_loop: LOOP
			FETCH cur INTO value_to_delete;
			IF done THEN
					LEAVE read_loop;
			END IF;
			DELETE FROM produits_revendeurs WHERE produits_id = value_to_delete;
			DELETE FROM produits_categories WHERE produits_id = value_to_delete;
			DELETE FROM produits WHERE produits_id = value_to_delete;
		END LOOP;

		CLOSE cur;
		
		DELETE FROM revendeurs WHERE revendeurs.nom = nomRevendeur;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ModifyCategorie` (IN `categorieID` INT, IN `nomCategorie` VARCHAR(64))   BEGIN	
	UPDATE categories SET nom = nomCategorie WHERE categories.categories_id = categorieID;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ModifyProduit` (IN `produitID` INT, IN `nomProduit` VARCHAR(64), IN `descriptionProduit` VARCHAR(255), IN `prixProduit` DECIMAL(10,2), IN `newStatut` BOOLEAN)   BEGIN	
	UPDATE produits SET nom = nomProduit, description = descriptionProduit, prix_achat = prixProduit, statut = newStatut, date_modification = DATE(NOW()) WHERE produits.produits_id = produitID;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ModifyRevendeur` (IN `revendeurID` INT, IN `nomRevendeur` VARCHAR(120))   BEGIN	
	UPDATE revendeurs SET nom = nomRevendeur WHERE revendeurs.revendeurs_id = revendeurID;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `produits_gamez` ()   BEGIN
    SELECT p.nom as product_name, p.description as product_description, p.prix_achat as product_price, p.statut as product_status, r.nom as seller_name, r.date_creation as seller_creation_date, c.nom as categorie FROM produits p
        JOIN produits_categories pc on p.produits_id = pc.produits_id
        JOIN categories c on pc.categories_id = c.categories_id
        JOIN produits_revendeurs pr on p.produits_id = pr.produits_id
        JOIN revendeurs r on pr.revendeurs_id = r.revendeurs_id
    WHERE
        (c.nom = "jeux_videos" OR c.nom = "jeux_societe")
        AND r.nom = "gamez";
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `produits_medidonc` ()   BEGIN
    SELECT p.nom as p_name, p.description as p_description, p.date_modification as p_last_update, p.statut as p_status, r.revendeurs_id as id_revendeur, r.nom as nom_revendeur, r.date_creation as creation_date_revendeur FROM produits p
        JOIN produits_categories pc on p.produits_id = pc.produits_id
        JOIN categories c on pc.categories_id = c.categories_id
        JOIN produits_revendeurs pr on p.produits_id = pr.produits_id
        JOIN revendeurs r on pr.revendeurs_id = r.revendeurs_id
    WHERE
        (c.nom = "sport" OR c.nom = "sante")
        AND r.nom = "medidonc";
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `produits_sportsalut` ()   BEGIN
    SELECT p.nom as nom_produit, p.description as description_produit, r.nom as nom_revendeur, p.statut as en_stock, p.prix_achat as prix FROM produits p
        JOIN produits_categories pc on p.produits_id = pc.produits_id
        JOIN categories c on pc.categories_id = c.categories_id
        JOIN produits_revendeurs pr on p.produits_id = pr.produits_id
        JOIN revendeurs r on pr.revendeurs_id = r.revendeurs_id
    WHERE
        c.nom = "sport"
        AND r.nom = "sportsalut";
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `categories_id` int UNSIGNED NOT NULL,
  `nom` varchar(64) NOT NULL,
  `date_creation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `produits_id` int UNSIGNED NOT NULL,
  `nom` varchar(64) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `prix_achat` decimal(10,2) NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `date_creation` date NOT NULL,
  `date_modification` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits_categories`
--

CREATE TABLE `produits_categories` (
  `produits_id` int UNSIGNED NOT NULL,
  `categories_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits_revendeurs`
--

CREATE TABLE `produits_revendeurs` (
  `produits_id` int UNSIGNED NOT NULL,
  `revendeurs_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `revendeurs`
--

CREATE TABLE `revendeurs` (
  `revendeurs_id` int UNSIGNED NOT NULL,
  `nom` varchar(120) NOT NULL,
  `date_creation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categories_id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`produits_id`);

--
-- Index pour la table `produits_categories`
--
ALTER TABLE `produits_categories`
  ADD KEY `produits_id` (`produits_id`),
  ADD KEY `categories_id` (`categories_id`);

--
-- Index pour la table `produits_revendeurs`
--
ALTER TABLE `produits_revendeurs`
  ADD KEY `produits_id` (`produits_id`),
  ADD KEY `revendeurs_id` (`revendeurs_id`);

--
-- Index pour la table `revendeurs`
--
ALTER TABLE `revendeurs`
  ADD PRIMARY KEY (`revendeurs_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `categories_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `produits_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `revendeurs`
--
ALTER TABLE `revendeurs`
  MODIFY `revendeurs_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `produits_categories`
--
ALTER TABLE `produits_categories`
  ADD CONSTRAINT `produits_categories_ibfk_1` FOREIGN KEY (`produits_id`) REFERENCES `produits` (`produits_id`),
  ADD CONSTRAINT `produits_categories_ibfk_2` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`categories_id`);

--
-- Contraintes pour la table `produits_revendeurs`
--
ALTER TABLE `produits_revendeurs`
  ADD CONSTRAINT `produits_revendeurs_ibfk_1` FOREIGN KEY (`produits_id`) REFERENCES `produits` (`produits_id`),
  ADD CONSTRAINT `produits_revendeurs_ibfk_2` FOREIGN KEY (`revendeurs_id`) REFERENCES `revendeurs` (`revendeurs_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
