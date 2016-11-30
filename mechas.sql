-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 30 Novembre 2016 à 12:12
-- Version du serveur :  10.1.13-MariaDB
-- Version de PHP :  5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mechas`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `playlistID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`ID`, `username`, `playlistID`) VALUES
(2, 'Pierre', 'PL75UBCDxw6HGGL-mawsU7MQDY6-rfkHZM');

-- --------------------------------------------------------

--
-- Structure de la table `users_videos`
--

CREATE TABLE `users_videos` (
  `ID` int(11) NOT NULL,
  `videoID` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users_videos`
--

INSERT INTO `users_videos` (`ID`, `videoID`) VALUES
(2, 'N6voHeEa3ig'),
(2, '3KL9mRus19o'),
(2, 'QZXc39hT8t4'),
(2, 'hPk5Ot5NXZg'),
(2, 'NucJk8TxyRg'),
(2, 'jhdFe3evXpk'),
(2, 'UJWk_KNbDHo'),
(2, '2i2khp_npdE'),
(2, 'SyRv0-oPfKE'),
(2, 'b8PPap4dJog'),
(2, 'Zg6tFYIBvIo'),
(2, 'sJMBd5z9Ki4'),
(2, 'q9mzAf2cbx0'),
(2, '13_3zV3_DJ0'),
(2, 'PjkDx1i0FeI'),
(2, 'SfhsWbCU9bY'),
(2, '1NeUBCF6d2E'),
(2, 'IMN7NSzBlk0'),
(2, '_hwylByJzag'),
(2, 'B4TBRcVe4mY'),
(2, 'hRK7PVJFbS8'),
(2, '0HghMPN2Pes'),
(2, '95bC9LbaoQQ'),
(2, 'mnVzq0Ifyj8'),
(2, 'ydOrmH53SH8'),
(2, 'WFAMJf6vBz8'),
(2, 'eC2N4G_XopQ'),
(2, 'i78U3VEAwK8'),
(2, 'WUcXQ--yGWQ'),
(2, '8nd7Bbgl6FM'),
(2, 'witzw1Zijmc'),
(2, 'CehAKQL463M'),
(2, 'RCMXO9sBIcU'),
(2, 'JBNdpVK9dQQ'),
(2, 'OEb9cYXIVTA'),
(2, 'v4pi1LxuDHc'),
(2, 'GcI79CmxHM4');

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
  `downloaded` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `videos`
--

INSERT INTO `videos` (`videoID`, `title`, `tagTitle`, `tagAuthor`, `tagAlbum`, `tagYear`, `tagStyle`, `downloaded`) VALUES
('0HghMPN2Pes', 'Blake - Hanging on (CAFE Remix)', '', '', '', '', '', 0),
('13_3zV3_DJ0', 'Eli & Fur - Seeing Is Believing (Ft. Shadow Child) (Music Video)', '', '', '', '', '', 0),
('1NeUBCF6d2E', '100s - My Activator', 'My Activator', '100s', 'Ice Cold Perm', '2012', 'USRap', 0),
('2i2khp_npdE', 'Alan Walker - Sing Me To Sleep', 'Sing Me To Sleep', 'Alan Walker', 'Sing Me To Sleep', '2016', 'Electronic', 0),
('3KL9mRus19o', 'Blackstreet - No Diggity', 'No Diggity', 'Blackstreet', 'No Diggity', '1990', 'USRap', 0),
('8nd7Bbgl6FM', 'Kygo - Carry Me', 'Carry Me', 'Kygo', 'Kygo', '2016', 'Electronic', 0),
('95bC9LbaoQQ', 'Ziu x Nyanara - Unforgettable', 'Unforgettable', 'Ziu x Nyanara', 'Unforgettable', '2014', 'Chillstep/Chill', 0),
('B4TBRcVe4mY', 'THUGLI - Run This (Official Video)', '', '', '', '', '', 0),
('b8PPap4dJog', 'Kygo - Here for You', 'Here for You', 'Kygo', 'Kygo', '2016', 'Electronic', 0),
('CehAKQL463M', 'Møme - Playground', 'Møme', 'Playground', 'Møme', '2015', 'Electronic', 0),
('eC2N4G_XopQ', 'Valentin - Port Of Call', 'Port Of Call', 'Valentin', 'Port Of Call', '2013', 'Chillstep/Chill', 0),
('GcI79CmxHM4', 'Owl Vision - Lightshy', '', '', '', '', '', 0),
('hPk5Ot5NXZg', 'Walter''s Life - Walter Theme Mix', 'Walter''s Life', '', 'Walter''s Life', '2013', 'Movie', 0),
('hRK7PVJFbS8', 'Kendrick Lamar - King Kunta', '', '', '', '', '', 0),
('i78U3VEAwK8', 'Uppermost - Flashback', 'Flashback', 'Uppermost', 'Uppermost', '2010', 'Electronic', 0),
('IMN7NSzBlk0', '100s - Different Type Of Love', 'Different Type Of Love', '100s', 'Ice Cold Perm', '2012', 'USRap', 0),
('JBNdpVK9dQQ', 'Lucian X Remmi - Bobby K', 'Bobby K', 'Lucian X Remmi', 'Lucian X Remmi', '2014', 'Electronic', 0),
('jhdFe3evXpk', 'Dire Straits - Brothers In Arms', 'Brothers In Arms', 'Dire Straits', 'Brothers In Arms', '1985', 'Rock', 0),
('mnVzq0Ifyj8', 'Skrux - The Shadow', 'The Shadow', 'Skrux', 'The Shadow', '2013', 'Chillstep/Chill', 0),
('N6voHeEa3ig', 'Coolio - Gangster''s Paradise', 'Gangster''s Paradise', 'Coolio', 'Gangster''s Paradise', '1995', 'USRap', 0),
('NucJk8TxyRg', 'José González - Stay Alive', 'Stay Alive', 'José González', 'The Secret Life of Walter Mitty: Music From and In', '2013', 'Movie', 0),
('OEb9cYXIVTA', 'CAFE -  Labour of Love', 'Labour of Love', 'CAFE', 'CAFE', '2016', 'Electronic', 0),
('PjkDx1i0FeI', 'Kung Fury OST - Mitch Murder - Power Move - Metal cover by Alan Malcolm', '', '', '', '', '', 0),
('q9mzAf2cbx0', 'Evangeline - My Kingdom (William Black Remix)', 'My Kingdom', 'Evangeline', 'Evangeline', '2015', 'Electronic', 0),
('QZXc39hT8t4', 'Dr. Dre - The Next Episode', 'The Next Episode', 'Dr. Dre', 'The Next Episode', '1990', 'USRap', 0),
('RCMXO9sBIcU', 'Most Beautiful Music Ever: Everdream by Epic Soul Factory', '', '', '', '', 'Chillstep/Chill', 0),
('SfhsWbCU9bY', '100s - 1999', '1999', '100s', 'Ice Cold Perm', '2012', 'USRap', 0),
('sJMBd5z9Ki4', 'Matthew Koma - One Night', 'One Night', 'Matthew Koma', 'Vicetone', '2014', 'Electronic', 0),
('SyRv0-oPfKE', 'Seeb - Breathe', 'Breathe', 'Seeb', 'Breathe', '2016', 'Electronic', 0),
('UJWk_KNbDHo', 'The Lumineers - Stubborn Love', 'Stubborn Love', 'The Lumineers', 'The Lumineers', '2016', 'Rock', 0),
('v4pi1LxuDHc', 'The Lumineers - Sleep On The Floor', 'Sleep On The Floor', 'The Lumineers', 'Sleep On The Floor', '2016', 'Rock', 0),
('WFAMJf6vBz8', 'Andreas B - The Way You', 'The Way You', 'Andreas B', 'Andreas B', '2013', 'Chillstep/Chill', 0),
('witzw1Zijmc', 'Møme - Hold On (Official Music Video) ft. Dylan Wright', '', '', '', '', '', 0),
('WUcXQ--yGWQ', 'MØ - Final Song', 'Final Song', 'MØ', 'Final Song', '2016', 'Electronic', 0),
('ydOrmH53SH8', 'Siarate - Plastic Smiles', 'Plastic Smiles', 'Siarate', 'Siarate', '2013', 'Chillstep/Chill', 0),
('Zg6tFYIBvIo', 'Vicetone - United We Dance', 'United We Dance', 'Vicetone', 'United We Dance', '2014', 'Electronic', 0),
('_hwylByJzag', 'Get Ready - 2 Unlimited (Steve Aoki Remix)', 'Get Ready', '2 Unlimited', '2 Unlimited', '2013', 'Electronic', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
