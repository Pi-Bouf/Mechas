-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Lun 15 Mai 2017 à 00:13
-- Version du serveur :  10.1.21-MariaDB
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `youtube`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `name`) VALUES
(1, 'Pierre'),
(2, 'Camille');

-- --------------------------------------------------------

--
-- Structure de la table `users_playlists`
--

CREATE TABLE `users_playlists` (
  `user_id` int(11) NOT NULL,
  `playlist_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users_playlists`
--

INSERT INTO `users_playlists` (`user_id`, `playlist_id`) VALUES
(1, 'PL75UBCDxw6HGGL-mawsU7MQDY6-rfkHZM'),
(1, 'RDv4pi1LxuDHc'),
(2, 'PL75UBCDxw6HHhM-FNEBnFq46UWh25PDD5');

-- --------------------------------------------------------

--
-- Structure de la table `videos`
--

CREATE TABLE `videos` (
  `videoID` varchar(15) NOT NULL,
  `title` varchar(100) NOT NULL,
  `tagTitle` varchar(50) NOT NULL,
  `tagAuthor` varchar(50) NOT NULL,
  `tagAlbum` varchar(50) NOT NULL,
  `tagYear` varchar(4) NOT NULL,
  `tagStyle` varchar(20) NOT NULL,
  `downloaded` tinyint(1) NOT NULL,
  `converted` tinyint(1) NOT NULL DEFAULT '0',
  `changed` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `videos`
--

INSERT INTO `videos` (`videoID`, `title`, `tagTitle`, `tagAuthor`, `tagAlbum`, `tagYear`, `tagStyle`, `downloaded`, `converted`, `changed`) VALUES
('0HghMPN2Pes', 'Blake - Hanging on (CAFE Remix)', '', '', '', '', '', 0, 0, 0),
('0yW7w8F2TVA', 'James Arthur - Say You Won\'t Let Go', '', '', '', '', '', 1, 0, 0),
('13_3zV3_DJ0', 'Eli & Fur - Seeing Is Believing (Ft. Shadow Child) (Music Video)', '', '', '', '', '', 0, 0, 0),
('1NeUBCF6d2E', '100s - My Activator', 'My Activator', '100s', 'Ice Cold Perm', '2012', 'USRap', 0, 0, 0),
('2i2khp_npdE', 'Alan Walker - Sing Me To Sleep', 'Sing Me To Sleep', 'Alan Walker', 'Sing Me To Sleep', '2016', 'Electronic', 1, 0, 0),
('3KL9mRus19o', 'Blackstreet - No Diggity', 'No Diggity', 'Blackstreet', 'No Diggity', '1990', 'USRap', 1, 0, 0),
('8nd7Bbgl6FM', 'Kygo - Carry Me', 'Carry Me', 'Kygo', 'Kygo', '2016', 'Electronic', 0, 0, 0),
('95bC9LbaoQQ', 'Ziu x Nyanara - Unforgettable', 'Unforgettable', 'Ziu x Nyanara', 'Unforgettable', '2014', 'Chillstep/Chill', 0, 0, 0),
('aN5s9N_pTUs', 'The Lumineers - Cleopatra', '', '', '', '', '', 1, 0, 0),
('aqsL0QQaSP4', 'Seafret - Oceans', '', '', '', '', '', 1, 0, 0),
('B4TBRcVe4mY', 'THUGLI - Run This (Official Video)', '', '', '', '', '', 0, 0, 0),
('b8PPap4dJog', 'Kygo - Here for You', 'Here for You', 'Kygo', 'Kygo', '2016', 'Electronic', 1, 0, 0),
('CehAKQL463M', 'Møme - Playground', 'Møme', 'Playground', 'Møme', '2015', 'Electronic', 0, 0, 0),
('CXTmi6C9Nmg', 'Perdre du Ventre et des Poignées d\'Amour Rapidement !', '', '', '', '', '', 1, 0, 0),
('eC2N4G_XopQ', 'Valentin - Port Of Call', 'Port Of Call', 'Valentin', 'Port Of Call', '2013', 'Chillstep/Chill', 0, 0, 0),
('EcU1ruSo5s8', 'PROGRAMME ABDOS TIBO INSHAPE en 5 minutes ! Sans matériel !', '', '', '', '', '', 1, 0, 0),
('GcI79CmxHM4', 'Owl Vision - Lightshy', '', '', '', '', '', 0, 0, 0),
('hPk5Ot5NXZg', 'Walter\'s Life - Walter Theme Mix', 'Walter\'s Life', '', 'Walter\'s Life', '2013', 'Movie', 1, 0, 0),
('hRK7PVJFbS8', 'Kendrick Lamar - King Kunta', '', '', '', '', '', 0, 0, 0),
('i78U3VEAwK8', 'Uppermost - Flashback', 'Flashback', 'Uppermost', 'Uppermost', '2010', 'Electronic', 0, 0, 0),
('IMN7NSzBlk0', '100s - Different Type Of Love', 'Different Type Of Love', '100s', 'Ice Cold Perm', '2012', 'USRap', 0, 0, 0),
('JBNdpVK9dQQ', 'Lucian X Remmi - Bobby K', 'Bobby K', 'Lucian X Remmi', 'Lucian X Remmi', '2014', 'Electronic', 0, 0, 0),
('jhdFe3evXpk', 'Dire Straits - Brothers In Arms', 'Brothers In Arms', 'Dire Straits', 'Brothers In Arms', '1985', 'Rock', 1, 0, 0),
('mnVzq0Ifyj8', 'Skrux - The Shadow', 'The Shadow', 'Skrux', 'The Shadow', '2013', 'Chillstep/Chill', 0, 0, 0),
('N6voHeEa3ig', 'Coolio - Gangster\'s Paradise', 'Gangster\'s Paradise', 'Coolio', 'Gangster\'s Paradise', '1995', 'USRap', 1, 0, 0),
('NucJk8TxyRg', 'José González - Stay Alive', 'Stay Alive', 'José González', 'The Secret Life of Walter Mitty: Music From and In', '2013', 'Movie', 1, 0, 0),
('OEb9cYXIVTA', 'CAFE -  Labour of Love', 'Labour of Love', 'CAFE', 'CAFE', '2016', 'Electronic', 0, 0, 0),
('PjkDx1i0FeI', 'Kung Fury OST - Mitch Murder - Power Move - Metal cover by Alan Malcolm', '', '', '', '', '', 0, 0, 0),
('pTOC_q0NLTk', 'The Lumineers - Ophelia', '', '', '', '', '', 1, 0, 0),
('q9mzAf2cbx0', 'Evangeline - My Kingdom (William Black Remix)', 'My Kingdom', 'Evangeline', 'Evangeline', '2015', 'Electronic', 0, 0, 0),
('QZXc39hT8t4', 'Dr. Dre - The Next Episode', 'The Next Episode', 'Dr. Dre', 'The Next Episode', '1990', 'USRap', 1, 0, 0),
('RCMXO9sBIcU', 'Most Beautiful Music Ever: Everdream by Epic Soul Factory', '', '', '', '', 'Chillstep/Chill', 0, 0, 0),
('SfhsWbCU9bY', '100s - 1999', '1999', '100s', 'Ice Cold Perm', '2012', 'USRap', 1, 0, 0),
('sJMBd5z9Ki4', 'Matthew Koma - One Night', 'One Night', 'Matthew Koma', 'Vicetone', '2014', 'Electronic', 0, 0, 0),
('SyRv0-oPfKE', 'Seeb - Breathe', 'Breathe', 'Seeb', 'Breathe', '2016', 'Electronic', 1, 0, 0),
('UJWk_KNbDHo', 'The Lumineers - Stubborn Love', 'Stubborn Love', 'The Lumineers', 'The Lumineers', '2016', 'Rock', 1, 0, 0),
('v4pi1LxuDHc', 'The Lumineers - Sleep On The Floor', 'Sleep On The Floor', 'The Lumineers', 'Sleep On The Floor', '2016', 'Rock', 1, 0, 0),
('WFAMJf6vBz8', 'Andreas B - The Way You', 'The Way You', 'Andreas B', 'Andreas B', '2013', 'Chillstep/Chill', 0, 0, 0),
('witzw1Zijmc', 'Møme - Hold On (Official Music Video) ft. Dylan Wright', '', '', '', '', '', 0, 0, 0),
('WUcXQ--yGWQ', 'MØ - Final Song', 'Final Song', 'MØ', 'Final Song', '2016', 'Electronic', 0, 0, 0),
('ydOrmH53SH8', 'Siarate - Plastic Smiles', 'Plastic Smiles', 'Siarate', 'Siarate', '2013', 'Chillstep/Chill', 0, 0, 0),
('Zg6tFYIBvIo', 'Vicetone - United We Dance', 'United We Dance', 'Vicetone', 'United We Dance', '2014', 'Electronic', 1, 0, 0),
('_hwylByJzag', 'Get Ready - 2 Unlimited (Steve Aoki Remix)', 'Get Ready', '2 Unlimited', '2 Unlimited', '2013', 'Electronic', 0, 0, 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users_playlists`
--
ALTER TABLE `users_playlists`
  ADD PRIMARY KEY (`user_id`,`playlist_id`);

--
-- Index pour la table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`videoID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
