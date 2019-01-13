-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2019 at 05:12 PM
-- Server version: 5.7.24-log
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `agenda`
--

CREATE TABLE `agenda` (
  `name` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `dayID` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `workingHoursDay` int(64) NOT NULL,
  `researchHoursDay` int(64) NOT NULL,
  `ca` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `agenda`
--

INSERT INTO `agenda` (`name`, `dayID`, `workingHoursDay`, `researchHoursDay`, `ca`) VALUES
('tuan', 'date01', 3, 5, 0),
('tuan', 'date02', 1, 7, 1),
('badman', 'date01', 4, 4, 1),
('badman', 'date02', 4, 4, 0),
('zyye', 'date01', 0, 8, 1),
('zyye', 'date03', 2, 7, 0),
('miracle', 'date04', 3, 5, 1),
('attacker', 'date04', 6, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dates`
--

CREATE TABLE `dates` (
  `dateID` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `dayName` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `dates`
--

INSERT INTO `dates` (`dateID`, `dayName`) VALUES
('date01', '1/1/2019'),
('date02', '2/1/2019'),
('date03', '07/08/2019'),
('date04', '29/07/2019');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `name`) VALUES
('user01', 'tuan'),
('user02', 'badman'),
('user03', 'miracle'),
('user04', 'zyye');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
