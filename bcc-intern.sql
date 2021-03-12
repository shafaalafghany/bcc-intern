-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 12, 2021 at 05:44 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bcc-intern`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_img` varchar(100) NOT NULL,
  `product_price` int(200) NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_img` varchar(100) NOT NULL,
  `product_price` int(200) NOT NULL,
  `product_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `product_name`, `product_img`, `product_price`, `product_desc`) VALUES
(1, 'Kopi Robusta', 'robusta', 40000, 'Robusta memiliki citarasa pahit. Rasanya sangat simpel dan ini hanyalah kopi punya aroma tegas.'),
(2, 'Kopi Arabika', 'arabica', 70000, 'Arabika memiliki lebih banyak (rasa) citrus. Rasa kopi ini agak asam dan aroma simpel.'),
(3, 'Kopi Excelsa', 'excelsa', 40000, 'Kopi Excelsa mempunyai citarasa dan aroma yang dikategorikan kuat dan dominan pahit.');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `invoice` varchar(60) NOT NULL,
  `id_user` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `total_price` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `invoice`, `id_user`, `date`, `total_price`) VALUES
(1, '1', 1, '2021-03-17 12:03:21', 6000),
(2, '1', 1, '2021-03-17 12:03:21', 6000),
(3, '1', 1, '2021-03-17 12:03:21', 6000),
(4, '1', 1, '2021-03-17 12:03:21', 6000),
(5, '1', 1, '2021-03-17 12:03:21', 6000),
(6, '1', 1, '2021-03-17 12:03:21', 6000),
(7, '1', 1, '2021-03-17 12:03:21', 6000),
(8, '1', 1, '2021-03-17 12:03:21', 6000),
(9, '1', 1, '2021-03-17 12:03:21', 6000),
(10, '1', 1, '2021-03-17 12:03:21', 6000),
(11, '1', 1, '2021-03-17 12:03:21', 6000),
(12, '0', 1, '2021-03-17 12:03:21', 6000),
(13, '0', 1, '2021-03-17 12:03:21', 6000),
(14, '0', 1, '2021-03-17 12:03:21', 6000),
(15, '0', 1, '2021-03-17 12:03:21', 6000),
(16, '0', 1, '2021-03-17 12:03:21', 6000),
(17, '[object Object]', 1, '2021-03-17 12:03:21', 6000),
(18, '17', 1, '2021-03-17 12:03:21', 6000),
(19, '18', 1, '2021-03-17 12:03:21', 6000),
(20, '19', 1, '2021-03-17 12:03:21', 6000),
(21, '21020520', 1, '2021-03-17 12:03:21', 6000),
(22, '21020521', 1, '2021-03-17 12:03:21', 6000),
(23, '2102050022', 1, '2021-03-17 12:03:21', 6000),
(24, '2102050023', 1, '2021-03-17 12:03:21', 6000),
(25, '2102050024', 1, '2021-03-17 12:03:21', 6000),
(26, '2102050025', 1, '2021-03-17 12:03:21', 6000),
(27, '2102050026', 1, '2021-03-17 12:03:21', 6000),
(28, '2102050027', 1, '2021-03-17 12:03:21', 6000),
(29, '2102050028', 1, '2021-03-17 12:03:21', 6000),
(30, '2102050029', 1, '2021-03-17 12:03:21', 6000),
(31, '2102050030', 1, '2021-03-17 12:03:21', 6000),
(32, '2102050031', 1, '2021-03-17 12:03:21', 6000),
(33, '2102050032', 1, '2021-03-17 12:03:21', 6000),
(34, '2102050033', 1, '2021-03-17 12:03:21', 6000),
(35, 'INV/2102050034', 1, '2021-03-17 12:03:21', 6000),
(36, 'INV/2102050035', 1, '2021-03-17 12:03:21', 6000),
(37, 'INV/2102050036', 1, '2021-03-17 12:03:21', 6000);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_detail`
--

DROP TABLE IF EXISTS `transaction_detail`;
CREATE TABLE `transaction_detail` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `price` int(200) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `id_user` int(11) NOT NULL,
  `id_transaction` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction_detail`
--

INSERT INTO `transaction_detail` (`id`, `id_product`, `price`, `date`, `id_user`, `id_transaction`, `qty`) VALUES
(1, 1, 6000, '2021-03-12 23:15:02', 1, 30, 1),
(2, 1, 6000, '2021-03-12 23:17:53', 1, 31, 1),
(3, 1, 6000, '2021-03-12 23:18:20', 1, 32, 1),
(4, 1, 6000, '2021-03-12 23:18:44', 1, 33, 1),
(5, 1, 6000, '2021-03-12 23:19:47', 1, 34, 1),
(6, 1, 6000, '2021-03-12 23:23:31', 1, 35, 1),
(7, 1, 6000, '2021-03-12 23:29:42', 1, 36, 1),
(8, 1, 6000, '2021-03-12 23:30:01', 1, 37, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `address`, `gender`, `role`) VALUES
(1, 'Shafa', 'shafa@domain.com', '123456', '1234567890', NULL, NULL, 2),
(2, 'Admin', 'admin@domain.com', '123456', '1234567890', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`id_user`);

--
-- Indexes for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_transaction` (`id_transaction`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction_detail`
--
ALTER TABLE `transaction_detail`
  ADD CONSTRAINT `transaction_detail_ibfk_1` FOREIGN KEY (`id`) REFERENCES `transaction` (`id`),
  ADD CONSTRAINT `transaction_detail_ibfk_2` FOREIGN KEY (`id_transaction`) REFERENCES `transaction` (`id`),
  ADD CONSTRAINT `transaction_detail_ibfk_3` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;