-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2020 at 01:28 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrators`
--

CREATE TABLE `administrators` (
  `ID` int(11) NOT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `PasswordHash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `administrators`
--

INSERT INTO `administrators` (`ID`, `Email`, `PasswordHash`) VALUES
(1, 'acmemoviedb@outlook.com', '$argon2i$v=19$m=65536,t=4,p=1$SG1FdHJaczBwY2o5WVZaOQ$exTBlTzuZreoFZYfofpfxfH7M5Z/SFoGmnrRe1w08Kk');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `ID` int(11) NOT NULL,
  `FirstName` varchar(20) DEFAULT NULL,
  `LastName` varchar(20) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `Newsletter` varchar(3) DEFAULT NULL,
  `BreakingNews` varchar(3) DEFAULT NULL,
  `PendingRemoval` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`ID`, `FirstName`, `LastName`, `Email`, `Newsletter`, `BreakingNews`, `PendingRemoval`) VALUES
(1, 'Reece', 'Pieri', 'rpieri@live.com.au', 'no', 'no', 'yes'),
(2, 'Ivy', 'Chiang', 'ivychiang@gmail.com', 'no', 'no', 'no'),
(3, 'Jaden', 'Pieri', 'jpieri@live.com.au', 'no', 'no', 'no'),
(4, 'Lea', 'Pieri', 'lpieri@live.com.au', 'no', 'no', 'yes'),
(5, 'Jose Rico', 'Imbang', 'imbangjoserico@gmail.com', 'no', 'no', 'no'),
(6, 'Say Hon', 'Lee', 'sayhon@live.co.uk', 'no', 'no', 'no');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrators`
--
ALTER TABLE `administrators`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrators`
--
ALTER TABLE `administrators`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
