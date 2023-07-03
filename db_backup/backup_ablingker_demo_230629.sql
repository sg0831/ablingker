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
-- Table structure for table `matching_record`
--

DROP TABLE IF EXISTS `matching_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_record` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `service_info` varchar(60) NOT NULL,
  `client_user` varchar(20) NOT NULL,
  `supporter_user` varchar(20) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `created` datetime NOT NULL,
  `service_start_time` datetime DEFAULT NULL,
  `esstimated_point` int unsigned NOT NULL,
  `payment_point` int unsigned NOT NULL,
  `is_reservation` tinyint(1) DEFAULT NULL,
  `service_end_time` datetime DEFAULT NULL,
  `discription` varchar(900) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `service_info` (`service_info`),
  KEY `client_user` (`client_user`),
  KEY `surpporter_user` (`supporter_user`),
  KEY `status` (`status`),
  CONSTRAINT `matching_record_ibfk_1` FOREIGN KEY (`service_info`) REFERENCES `service_info` (`name`),
  CONSTRAINT `matching_record_ibfk_2` FOREIGN KEY (`client_user`) REFERENCES `user` (`user_id`),
  CONSTRAINT `matching_record_ibfk_3` FOREIGN KEY (`supporter_user`) REFERENCES `user` (`user_id`),
  CONSTRAINT `matching_record_ibfk_4` FOREIGN KEY (`status`) REFERENCES `matching_status` (`status_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_record`
--

LOCK TABLES `matching_record` WRITE;
/*!40000 ALTER TABLE `matching_record` DISABLE KEYS */;
INSERT INTO `matching_record` VALUES (1,'도보이동','test1_client',NULL,'waiting','2023-06-29 16:32:34',NULL,0,0,0,NULL,'식당 이동지원'),(2,'도보이동','test1_client',NULL,'waiting','2023-06-29 19:18:33',NULL,1000,0,0,NULL,'식당 이동지원');
/*!40000 ALTER TABLE `matching_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matching_reservation_record`
--

DROP TABLE IF EXISTS `matching_reservation_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matching_reservation_record` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `matching_record` int NOT NULL,
  `reservation_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matching_reservation_record`
--

LOCK TABLES `matching_reservation_record` WRITE;
/*!40000 ALTER TABLE `matching_reservation_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `matching_reservation_record` ENABLE KEYS */;
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
INSERT INTO `matching_status` VALUES ('break'),('cancel'),('cli-exit'),('doing'),('finish'),('matched'),('reservation'),('spt-exit'),('timeout'),('waiting');
/*!40000 ALTER TABLE `matching_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moving_matching_record`
--

DROP TABLE IF EXISTS `moving_matching_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moving_matching_record` (
  `matching_record` int unsigned NOT NULL,
  `start_latitude` decimal(9,7) NOT NULL,
  `start_longitude` decimal(9,7) DEFAULT NULL,
  `end_latitude` decimal(9,7) NOT NULL,
  `end_longitude` decimal(9,7) DEFAULT NULL,
  `start_name` varchar(300) NOT NULL,
  `end_name` varchar(300) NOT NULL,
  `is_roundtrip` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`matching_record`),
  CONSTRAINT `moving_matching_record_ibfk_1` FOREIGN KEY (`matching_record`) REFERENCES `matching_record` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moving_matching_record`
--

LOCK TABLES `moving_matching_record` WRITE;
/*!40000 ALTER TABLE `moving_matching_record` DISABLE KEYS */;
INSERT INTO `moving_matching_record` VALUES (1,1.1100000,1.1200000,1.1100000,1.1200000,'대구대 정문','웅지관',0),(2,1.1100000,1.1200000,1.1100000,1.1200000,'대구대 정문','웅지관',0);
/*!40000 ALTER TABLE `moving_matching_record` ENABLE KEYS */;
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
  `basic_value` int unsigned NOT NULL DEFAULT '0',
  `basic_price` int unsigned NOT NULL DEFAULT '0',
  `advance_value` int unsigned NOT NULL DEFAULT '0',
  `advance_price` int unsigned NOT NULL DEFAULT '0',
  `discription` text NOT NULL,
  `unit_of_measure` varchar(10) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_info`
--

LOCK TABLES `service_info` WRITE;
/*!40000 ALTER TABLE `service_info` DISABLE KEYS */;
INSERT INTO `service_info` VALUES ('도보이동',0,1000,1500,250,250,'이용자와 서포터가 직접 대면하여 진행되는 서비스입니다. \n이용자가 지정한 출발지에서 출발하고 이용자가 지정한 목적지에 도착하면 서비스가 종료됩니다. \n특별한 비고사항이 없는 단순 이동지원을 목적으로 하는 서비스입니다. 단, 이동 중 이용자의 편의를 고려하여 이동 속도와 경로를 신경써야 합니다.','meter'),('실시간 카메라 지원',1,90,1000,60,100,'이용자 스마트폰의 카메라를 이용하여 비대면으로 진행되는 서비스입니다. \n출발지와 목적지는 따로 존재하지 않으며, 서비스 종료 후 총 소요시간에 따라 비용을 측정합니다. \n기본적으로 이용자가 종료 버튼을 누를 때까지 서비스가 제공되지만, 특별한 경우 서포터가 서비스를 종료하는 것도 가능합니다.','seconds');
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
  `password` varchar(255) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `gender` char(1) NOT NULL,
  `birth_date` date NOT NULL,
  `is_login` tinyint(1) NOT NULL DEFAULT '0',
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `introduction` varchar(900) NOT NULL DEFAULT '',
  `point` int unsigned DEFAULT NULL,
  `user_type` char(3) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_type` (`user_type`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `user_type` (`type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('test1_client','$2a$10$OSlaE4lAL6OFM7eZNJ4R5uyijUD5Jz2tNBhj0YVLk50JqmmVOwFiW','테스터1_클라이언트','m','2023-06-28',1,'2023-06-29 00:00:54','',999999999,'cli'),('test2_supporter','$2a$10$el9/8QlONS2qXRcDR/dl/OWsqbpr5QYJ3gWyUpOa5oMwQ5oQ3aTDK','테스트2','m','2023-06-29',1,'2023-06-29 18:50:01','',0,'spt');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `type_name` char(3) NOT NULL,
  PRIMARY KEY (`type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES ('adm'),('cli'),('spt');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-29 20:45:00
