CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `name`) VALUES
(1, 'Pierre');

CREATE TABLE `users_playlists` (
  `user_id` int(11) NOT NULL,
  `playlist_id` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`, `playlist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `videos` (
  `videoID` varchar(15) NOT NULL,
  `title` varchar(100) NOT NULL,
  `tagTitle` varchar(50) NOT NULL,
  `tagAuthor` varchar(50) NOT NULL,
  `tagAlbum` varchar(50) NOT NULL,
  `tagYear` varchar(4) NOT NULL,
  `tagStyle` varchar(20) NOT NULL,
  `downloaded` tinyint(1) NOT NULL,
  PRIMARY KEY (`videoID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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