-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 30 Novembre 2020 à 04:38
-- Version du serveur :  5.7.32-0ubuntu0.16.04.1
-- Version de PHP :  7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `netflix`
--

-- --------------------------------------------------------

--
-- Structure de la table `Profil`
--

CREATE TABLE `Profil` (
  `ID` int(11) NOT NULL,
  `NomProfil` varchar(255) NOT NULL,
  `MdpProfil` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `UtilisateurProfil`
--

CREATE TABLE `UtilisateurProfil` (
  `ID` int(11) NOT NULL,
  `IDProfil` int(11) NOT NULL,
  `IDUtilisateur` int(11) NOT NULL,
  `Utilisateur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Profil`
--
ALTER TABLE `Profil`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `UtilisateurProfil`
--
ALTER TABLE `UtilisateurProfil`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Profil`
--
ALTER TABLE `Profil`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `UtilisateurProfil`
--
ALTER TABLE `UtilisateurProfil`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;