-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cv_aleya
CREATE DATABASE IF NOT EXISTS `cv_aleya` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cv_aleya`;

-- Dumping structure for table cv_aleya.biodata
CREATE TABLE IF NOT EXISTS `biodata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `deskripsi` text,
  `foto_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aleya.biodata: ~1 rows (approximately)
INSERT INTO `biodata` (`id`, `nama`, `email`, `no_hp`, `deskripsi`, `foto_url`) VALUES
	(1, 'Aleya Giska Andini', 'giskaandinialeya@gmail.com', '085861202036', 'Lulusan Teknik Informatika yang memiliki kemampuan pemrograman yang solid serta soft skill yang kuat, terutama dalam komunikasi, kerja tim, dan pemecahan masalah. Berpengalaman mengerjakan proyek aplikasi berbasis web maupun mobile. Mampu beradaptasi cepat dengan teknologi baru dan selalu berorientasi pada solusi yang efisien dan terstruktur.', '/foto1.jpg');

-- Dumping structure for table cv_aleya.keahlian
CREATE TABLE IF NOT EXISTS `keahlian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_nama` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aleya.keahlian: ~5 rows (approximately)
INSERT INTO `keahlian` (`id`, `skill_nama`) VALUES
	(1, 'React Native'),
	(2, 'React.js'),
	(3, 'Laravel'),
	(4, 'HTML & CSS'),
	(5, 'UI/UX dasar');

-- Dumping structure for table cv_aleya.pendidikan
CREATE TABLE IF NOT EXISTS `pendidikan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `institusi` varchar(100) DEFAULT NULL,
  `gelar` varchar(100) DEFAULT NULL,
  `tahun` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aleya.pendidikan: ~0 rows (approximately)
INSERT INTO `pendidikan` (`id`, `institusi`, `gelar`, `tahun`) VALUES
	(1, 'Universitas Muhammadiyah Sukabumi', 'S1 - Komputer', '2019 – 2023');

-- Dumping structure for table cv_aleya.pengalaman
CREATE TABLE IF NOT EXISTS `pengalaman` (
  `id` int NOT NULL AUTO_INCREMENT,
  `posisi` varchar(100) DEFAULT NULL,
  `perusahaan` varchar(100) DEFAULT NULL,
  `durasi` varchar(50) DEFAULT NULL,
  `deskripsi` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table cv_aleya.pengalaman: ~0 rows (approximately)
INSERT INTO `pengalaman` (`id`, `posisi`, `perusahaan`, `durasi`, `deskripsi`) VALUES
	(1, 'Frontend & Mobile Developer (Internship)', 'PT Digital Kreatif Indonesia', 'Februari 2023 – Juli 2023', 'Terlibat dalam pengembangan antarmuka aplikasi mobile menggunakan React Native. Mengimplementasikan fitur autentikasi, manajemen state dengan Redux Toolkit, dan integrasi API. Berkolaborasi dengan tim backend serta tim desain untuk menghasilkan aplikasi yang responsif dan user-friendly. Mengoptimalkan UI agar lebih ringan dan mudah digunakan oleh pengguna.');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
