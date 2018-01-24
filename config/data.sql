DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `name`) VALUES
(1, 'Pierre');

DROP TABLE IF EXISTS `users_playlists`;
CREATE TABLE `users_playlists` (
  `user_id` int(11) NOT NULL,
  `playlist_id` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`, `playlist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users_playlists` VALUES(1, 'PL75UBCDxw6HGGL-mawsU7MQDY6-rfkHZM');

DROP TABLE IF EXISTS `videos`;
CREATE TABLE `videos` (
  `video_id` varchar(15) NOT NULL,
  `title` varchar(100) NOT NULL,
  `title_tag` varchar(50) NOT NULL,
  `author_tag` varchar(50) NOT NULL,
  `album_tag` varchar(50) NOT NULL,
  `year_tag` varchar(4) NOT NULL,
  `style_tag` varchar(20) NOT NULL,
  `downloaded` tinyint(1) NOT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `users_videos`;
CREATE TABLE `users_videos` (
  `user_id` int(11) NOT NULL,
  `video_id` varchar(15) NOT NULL,
  PRIMARY KEY(`user_id`, `video_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;