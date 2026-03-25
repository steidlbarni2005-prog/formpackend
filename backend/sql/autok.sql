CREATE DATABASE IF NOT EXISTS autok
DEFAULT CHARSET utf8
COLLATE utf8_hungarian_ci;
USE autok;
CREATE TABLE IF NOT EXISTS `autok` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `marka` varchar(255) NOT NULL,
    `gyartasiev` int(11) NOT NULL,
    `alvazszam` varchar(255) NOT NULL,
    `loero`  int(11) NOT NULL,
    `kilometerallasa` double NOT NULL,
    `uzemanyagtipus` varchar(255) NOT NULL,
    `fogyasztas` double NOT NULL,
    `uzemanyagszint` double NOT NULL,
 
    PRIMARY KEY (`id`)
) 