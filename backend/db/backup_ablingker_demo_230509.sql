-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ablingker_demo
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `matching_map_record`
--

DROP TABLE IF EXISTS `matching_map_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_map_record` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `matching_record` int unsigned NOT NULL,
  `start_latitude` decimal(9,7) NOT NULL,
  `start_rongitude` decimal(9,7) NOT NULL,
  `end_latitude` decimal(9,7) NOT NULL,
  `end_rongitude` decimal(9,7) NOT NULL,
  `start_name` varchar(300) NOT NULL,
  `end_name` varchar(300) NOT NULL,
  `distance` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `matching_record` (`matching_record`),
  CONSTRAINT `matching_map_record_ibfk_1` FOREIGN KEY (`matching_record`) REFERENCES `matching_record` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_map_record`
--

LOCK TABLES `matching_map_record` WRITE;
/*!40000 ALTER TABLE `matching_map_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `matching_map_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matching_record`
--

DROP TABLE IF EXISTS `matching_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_record` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `service_info` varchar(60) NOT NULL,
  `client_user` varchar(20) NOT NULL,
  `surpporter_user` varchar(20) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `waiting_time` time NOT NULL,
  `service_time` time NOT NULL,
  `client_gold` int unsigned NOT NULL DEFAULT '0',
  `surpporter_gold` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `service_info` (`service_info`),
  KEY `client_user` (`client_user`),
  KEY `surpporter_user` (`surpporter_user`),
  KEY `status` (`status`),
  CONSTRAINT `matching_record_ibfk_1` FOREIGN KEY (`service_info`) REFERENCES `service_info` (`name`),
  CONSTRAINT `matching_record_ibfk_2` FOREIGN KEY (`client_user`) REFERENCES `user` (`user_id`),
  CONSTRAINT `matching_record_ibfk_3` FOREIGN KEY (`surpporter_user`) REFERENCES `user` (`user_id`),
  CONSTRAINT `matching_record_ibfk_4` FOREIGN KEY (`status`) REFERENCES `matching_status` (`status_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_record`
--

LOCK TABLES `matching_record` WRITE;
/*!40000 ALTER TABLE `matching_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `matching_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matching_status`
--

DROP TABLE IF EXISTS `matching_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_status` (
  `status_name` varchar(20) NOT NULL,
  PRIMARY KEY (`status_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_status`
--

LOCK TABLES `matching_status` WRITE;
/*!40000 ALTER TABLE `matching_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `matching_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_info`
--

DROP TABLE IF EXISTS `service_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_info` (
  `name` varchar(60) NOT NULL,
  `is_online` tinyint(1) NOT NULL DEFAULT '0',
  `basic_value` smallint unsigned NOT NULL DEFAULT '0',
  `basic_unit` varchar(10) NOT NULL,
  `basic_price` int unsigned NOT NULL DEFAULT '0',
  `advance_value` smallint unsigned NOT NULL DEFAULT '0',
  `advance_unit` varchar(15) NOT NULL,
  `advance_price` int unsigned NOT NULL DEFAULT '0',
  `discription` text NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_info`
--

LOCK TABLES `service_info` WRITE;
/*!40000 ALTER TABLE `service_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `gender` char(1) NOT NULL,
  `birth_date` date NOT NULL,
  `user_type` char(3) NOT NULL,
  `permission_level` tinyint NOT NULL,
  `is_login` tinyint(1) NOT NULL DEFAULT '0',
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `introduction` varchar(900) NOT NULL,
  `gold` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('test1','1234','테스터1','m','1998-08-01','cli',0,0,'2023-05-09 00:00:46','나는 테스트1입니다.',0),('test2','1234','테스터2','f','1998-07-01','cli',0,0,'2023-05-09 00:03:10','나는 테스트2입니다.',0),('test3','1234','테스터3','f','2000-01-01','spt',0,0,'2023-05-09 00:06:21','나는 서포터 테스트3입니다.',0),('test4','1234','테스터4','m','2001-01-01','spt',0,0,'2023-05-09 00:07:04','나는 서포터 테스트4입니다.',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09  1:07:00
