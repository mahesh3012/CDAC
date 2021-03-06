-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2021 at 10:37 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cdac`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` varchar(50) NOT NULL,
  `editing_rights` tinyint(1) NOT NULL DEFAULT 0,
  `user_password` text NOT NULL,
  `user_mail_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `editing_rights`, `user_password`, `user_mail_id`) VALUES
('barun', 0, 'pbkdf2:sha256:260000$3NUPDoFND6v0xmm0$cf8659a54de72e1589c9808b2e6da00afd469635a5effad5922426c714ee3c16', 'barun@gmail.com'),
('mahesh', 0, 'pbkdf2:sha256:260000$McP4dAqsOeiXPj4W$27b8a0ea0b342df15f40528857c858e867e68f401a4e21673bc92bb65afe841e', 'etcetra.rm@gmail.com'),
('rahul', 1, 'pbkdf2:sha256:260000$Tn02CrjKM88OjlRn$0bdb5864db1ef408819c12232da4edc6faa956989106e67d6b4ae2287d9d1ac7', 'rahul@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_info`
--

CREATE TABLE `vehicle_info` (
  `image_id` varchar(50) NOT NULL,
  `uuid` text DEFAULT NULL,
  `license_number` text DEFAULT NULL,
  `vehicle_detection_confidence` float DEFAULT NULL,
  `license_number_chars_confidence_list` text DEFAULT NULL,
  `license_number_confidence_sum` float DEFAULT NULL,
  `cam_id` text DEFAULT NULL,
  `timestamp` text DEFAULT NULL,
  `user_id` varchar(50) NOT NULL,
  `manually_enter_LP_number` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle_info`
--

INSERT INTO `vehicle_info` (`image_id`, `uuid`, `license_number`, `vehicle_detection_confidence`, `license_number_chars_confidence_list`, `license_number_confidence_sum`, `cam_id`, `timestamp`, `user_id`, `manually_enter_LP_number`) VALUES
('1.jpg', 'cam1_173988924531115088360429731670554753289', 'MH4EK1551', 0.83, '0.91,0.87,0.76,0.78,0.84,0.87,0.69,0.87,0.75', 7.34, 'cam1', '16-04-2021 10:13:25', 'mahesh', 'MH4EK1551'),
('10.jpg', 'cam1_262926483039785799875385807219625692345', 'MH12GR9168', 0.96, '0.82,0.9,0.82,0.91,0.9,0.89,0.88,0.87,0.85,0.85', 8.69, 'cam1', '16-04-2021 10:17:50', 'mahesh', 'MH12GR9168'),
('11.jpg', 'cam1_262926483039785799875385807219625692345', 'MH12GR9168', 0.96, '0.83,0.9,0.85,0.9,0.9,0.89,0.85,0.86,0.86,0.87', 8.71, 'cam1', '16-04-2021 10:17:50', 'mahesh', 'MH12GR9168'),
('12.jpg', 'cam1_262926483039785799875385807219625692345', 'MH12GR9168', 0.96, '0.76,0.89,0.87,0.9,0.9,0.9,0.89,0.88,0.88,0.87', 8.74, 'cam1', '16-04-2021 10:17:50', 'barun', 'MH12GR9168'),
('13.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14849', 0.81, '0.86,0.71,0.84,0.74,0.77,0.73,0.64', 5.29, 'cam1', '16-04-2021 10:19:42', 'barun', 'MH14849'),
('14.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14B8749', 0.81, '0.81,0.87,0.85,0.88,0.83,0.77,0.85,0.82,0.76', 7.44, 'cam1', '16-04-2021 10:19:42', 'barun', 'MH14B8749'),
('15.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14R1499', 0.81, '0.87,0.86,0.84,0.87,0.9,0.87,0.81,0.77,0.87', 7.66, 'cam1', '16-04-2021 10:19:42', 'barun', 'MH14R1499'),
('16.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.81, '0.87,0.89,0.85,0.86,0.88,0.88,0.85,0.84,0.82,0.68', 8.42, 'cam1', '16-04-2021 10:19:42', 'barun', 'MH14BR7499'),
('17.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.81, '0.9,0.88,0.83,0.83,0.89,0.9,0.87,0.84,0.89,0.86', 8.69, 'cam1', '16-04-2021 10:19:42', 'barun', 'MH14BR7499'),
('18.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.81, '0.86,0.89,0.85,0.88,0.87,0.91,0.89,0.88,0.86,0.87', 8.76, 'cam1', '16-04-2021 10:19:42', 'barun', 'MH14BR7499'),
('19.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.87, '0.87,0.88,0.87,0.86,0.9,0.91,0.88,0.88,0.87,0.88', 8.8, 'cam1', '16-04-2021 10:19:45', 'barun', 'MH14BR7499'),
('2.jpg', 'cam1_49923262679806751632549854762052606421', 'MH4BK1651', 0.87, '0.74,0.89,0.82,0.87,0.88,0.88,0.87,0.89,0.79', 7.63, 'cam1', '16-04-2021 10:13:43', 'mahesh', 'MH4BK1651'),
('20.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.82, '0.86,0.89,0.87,0.9,0.87,0.9,0.89,0.89,0.88,0.87', 8.82, 'cam1', '16-04-2021 10:19:48', 'barun', 'MH14BR7499'),
('21.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.94, '0.82,0.91,0.87,0.88,0.9,0.9,0.89,0.91,0.89,0.89', 8.86, 'cam1', '16-04-2021 10:19:55', 'barun', 'MH14BR7499'),
('22.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.92, '0.86,0.9,0.86,0.91,0.89,0.91,0.89,0.9,0.88,0.87', 8.87, 'cam1', '16-04-2021 10:19:58', 'barun', 'MH14BR7499'),
('23.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.94, '0.83,0.92,0.88,0.88,0.91,0.91,0.9,0.88,0.89,0.88', 8.88, 'cam1', '16-04-2021 10:20:01', 'rahul', 'MH14BR7499'),
('24.jpg', 'cam1_71625561468908521656100936649946812483', 'MH14BR7499', 0.94, '0.87,0.9,0.88,0.89,0.9,0.91,0.9,0.9,0.89,0.89', 8.93, 'cam1', '16-04-2021 10:20:07', 'rahul', 'MH14BR7499'),
('25.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12L8409', 0.88, '0.81,0.86,0.85,0.86,0.85,0.86,0.88,0.78,0.84', 7.59, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12L8409'),
('26.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.61,0.89,0.85,0.9,0.89,0.89,0.9,0.88,0.87,0.85', 8.53, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('27.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.82,0.9,0.86,0.91,0.89,0.87,0.9,0.88,0.89,0.75', 8.67, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('28.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.78,0.89,0.87,0.89,0.87,0.84,0.9,0.9,0.89,0.88', 8.71, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('29.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.75,0.9,0.87,0.89,0.88,0.87,0.89,0.91,0.88,0.9', 8.74, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('3.jpg', 'cam1_173988924531115088360429731670554753289', 'MH14BK1851', 0.83, '0.85,0.89,0.84,0.73,0.83,0.88,0.85,0.86,0.87,0.73', 8.33, 'cam1', '16-04-2021 10:13:25', 'mahesh', 'MH14BK1851'),
('30.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.78,0.9,0.88,0.91,0.88,0.87,0.89,0.91,0.89,0.88', 8.79, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('31.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.86,0.9,0.87,0.9,0.88,0.86,0.9,0.9,0.89,0.87', 8.83, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('32.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.81,0.89,0.88,0.91,0.9,0.89,0.91,0.9,0.89,0.9', 8.88, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('33.jpg', 'cam1_139575188411302331705193878649388791406', 'MH12LJ8409', 0.88, '0.84,0.9,0.89,0.9,0.91,0.88,0.92,0.91,0.89,0.9', 8.94, 'cam1', '16-04-2021 10:21:41', 'rahul', 'MH12LJ8409'),
('4.jpg', 'cam1_173988924531115088360429731670554753289', 'MH14BK1651', 0.83, '0.9,0.89,0.83,0.74,0.88,0.89,0.84,0.88,0.88,0.88', 8.61, 'cam1', '16-04-2021 10:13:25', 'mahesh', 'MH14BK1651'),
('5.jpg', 'cam1_271195566064118113929556756227862104181', 'MH14BK1651', 0.96, '0.89,0.9,0.86,0.88,0.9,0.92,0.9,0.91,0.9,0.86', 8.92, 'cam1', '16-04-2021 10:14:14', 'mahesh', 'MH14BK1651'),
('6.jpg', 'cam1_271195566064118113929556756227862104181', 'MH14BK1651', 0.96, '0.9,0.9,0.86,0.89,0.91,0.91,0.89,0.91,0.9,0.86', 8.93, 'cam1', '16-04-2021 10:14:14', 'mahesh', 'MH14BK1651'),
('7.jpg', 'cam1_262926483039785799875385807219625692345', 'MH12G8916', 0.96, '0.76,0.75,0.71,0.87,0.86,0.67,0.84,0.86,0.78', 7.1, 'cam1', '16-04-2021 10:17:50', 'mahesh', 'MH12G8916'),
('8.jpg', 'cam1_262926483039785799875385807219625692345', 'MH12GR9168', 0.96, '0.76,0.87,0.84,0.89,0.87,0.88,0.87,0.86,0.77,0.83', 8.44, 'cam1', '16-04-2021 10:17:50', 'mahesh', 'MH12GR9168'),
('9.jpg', 'cam1_262926483039785799875385807219625692345', 'MH12GR9168', 0.96, '0.77,0.9,0.84,0.9,0.9,0.89,0.87,0.86,0.87,0.79', 8.59, 'cam1', '16-04-2021 10:17:50', 'mahesh', 'MH12GR9168');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vehicle_info`
--
ALTER TABLE `vehicle_info`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vehicle_info`
--
ALTER TABLE `vehicle_info`
  ADD CONSTRAINT `vehicle_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_info` (`user_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
