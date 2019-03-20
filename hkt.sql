-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2019 年 03 月 20 日 15:41
-- 伺服器版本: 10.1.35-MariaDB
-- PHP 版本： 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `hkt`
--

-- --------------------------------------------------------

--
-- 資料表結構 `engineeringteams`
--

CREATE TABLE `engineeringteams` (
  `team_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `person_in_charge_name` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `tel` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `engineeringteams`
--

INSERT INTO `engineeringteams` (`team_id`, `username`, `person_in_charge_name`, `email`, `tel`) VALUES
(1, 'user2', 'pic1', 'pic1@gmail.com', 87654321);

-- --------------------------------------------------------

--
-- 資料表結構 `hktcontrolstaffs`
--

CREATE TABLE `hktcontrolstaffs` (
  `staff_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `staff_name` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `tel` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `hktcontrolstaffs`
--

INSERT INTO `hktcontrolstaffs` (`staff_id`, `username`, `staff_name`, `email`, `tel`) VALUES
(1, 'user1', 'staff1', 'staff1@gmail.com', 12345678),
(2, 'user3', 'staff3', 'staff3@gmail.com', 98745112);

-- --------------------------------------------------------

--
-- 資料表結構 `itemcases`
--

CREATE TABLE `itemcases` (
  `item_case_id` int(20) NOT NULL,
  `quotation_id` int(20) NOT NULL,
  `work_item_id` varchar(20) NOT NULL,
  `item_amount` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `order_number` int(11) NOT NULL,
  `BSN` varchar(20) NOT NULL,
  `order_status` varchar(20) NOT NULL,
  `assigning_date` varchar(20) NOT NULL,
  `pre_visit_date` varchar(20) NOT NULL,
  `wiring_date` varchar(20) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `orders`
--

INSERT INTO `orders` (`order_number`, `BSN`, `order_status`, `assigning_date`, `pre_visit_date`, `wiring_date`, `team_id`) VALUES
(123, 'BSN123', 'pending', '2019-03-12', '2019-03-12', '2019-03-12', 321),
(545, 'BNS654', 'Assigned', '2019-03-18', '2019-03-18', '2019-03-18', 123),
(654, 'BSN654', 'pending', '2019-03-17', '2019-03-17', '2019-03-17', 884);

-- --------------------------------------------------------

--
-- 資料表結構 `pendingcases`
--

CREATE TABLE `pendingcases` (
  `case_id` int(20) NOT NULL,
  `order_number` int(20) NOT NULL,
  `pending_reason_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `pendingreasons`
--

CREATE TABLE `pendingreasons` (
  `reason_id` int(20) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `pendingreasons`
--

INSERT INTO `pendingreasons` (`reason_id`, `description`) VALUES
(1, 'Cannot contact customer'),
(2, 'Customer reject Pre Visit'),
(3, 'Await Pre Visit schedule'),
(4, 'Await wiring schedule'),
(5, 'Await 2N/BMO Pre Visit schedule'),
(6, 'Await 2N/BMO wiring schedule'),
(7, 'Re-schedule wiring date'),
(8, 'Re-schedule Pre Visit date'),
(9, 'Site not ready'),
(10, 'Await customer facility'),
(11, 'Await quotation'),
(12, 'Await quotation approval'),
(13, 'Await nom-con quotation to CPN'),
(14, 'Await nom-con quotation to Customer'),
(15, 'Await BMO permit'),
(16, 'Customer reject extra field work'),
(17, 'BMO reject extra work'),
(18, 'Third party issue'),
(19, 'Blockage case'),
(20, 'Await splitter issue'),
(21, 'Customer reject extra cost'),
(22, 'Order information issue'),
(23, 'Await provide cross-connect'),
(24, 'Customer request cancel');

-- --------------------------------------------------------

--
-- 資料表結構 `quotations`
--

CREATE TABLE `quotations` (
  `quotation_id` int(20) NOT NULL,
  `order_number` int(20) NOT NULL,
  `remarks` varchar(2000) NOT NULL,
  `photo_uploaded` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `users`
--

INSERT INTO `users` (`username`, `password`, `user_type`) VALUES
('user1', 'pw1', 'hktcs'),
('user2', 'pw2', 'et'),
('user3', 'pw3', 'HKTCS');

-- --------------------------------------------------------

--
-- 資料表結構 `workitems`
--

CREATE TABLE `workitems` (
  `work_item_id` varchar(20) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `unit` varchar(20) NOT NULL,
  `unit_rate` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `workitems`
--

INSERT INTO `workitems` (`work_item_id`, `description`, `unit`, `unit_rate`) VALUES
('a.1', 'Additional Site Check (Fast PON, PON Replenishment, Project ...)', 'Man-hour', 65.2),
('a.2', 'Additional Site Check ', 'Man-hour', 65.2),
('b', 'BMO Permit Application', 'Man-hour', 65.2),
('c', 'Outlets (socket)', 'Man-hour', 0),
('d', '', 'Man-hour', 65.2),
('D1(H)   ', 'Provide service by orders after normal working hours (Per Hour)', 'Man-hour', 0),
('D1(J)   ', 'Provide service by orders after normal working hours (Per Job)', 'Per Job', 0.1),
('G1-1', 'Run & install optical fibre, 2/4 cores, horizontal with associated components/outlets within 60 metres upon service subscription', 'Each job', 400),
('G1-2', 'Run & install optical fibre, 2/4 cores, horizontal with associated components/outlets within 100 metres upon service subscription\r\n', 'Each job', 500),
('G2-116', 'Paint Conduit (All Types) ', 'Per metre', 15.5),
('G2-117', 'Paint Metal Trunking 50-75mm to Match Surrounding', 'Metre', 24.3),
('G2-118', 'Paint Metal Trunking 100-150mm to Match Surrounding', 'Metre', 27.5),
('G2-121', 'Paint False Ceiling/Wall/Promat', 'Per square metre', 78.6),
('G2-143', 'Supply and Install 2 Hours Fire Rating \'Promat Brand Board\' with Company Approved Materials for Fire Resisting Construction.', 'Square Metre', 971.4),
('G2-144', 'Supply and Install 4 Hours Fire Rating \'Promat Brand Board\' with Company Approved Materials for Fire Resisting Construction.', 'Square Metre', 1092.2),
('G2-145', 'Dismantle & Reinstate \"Promat\" Board ', 'Square Metre', 65.6),
('G2-146', 'Supply of Skilled Planning Labour', 'Manhour', 94.2),
('G2-147', 'Supply of Skilled Labour', '-', 0),
('G2-22', 'Mechanical splicing of no polish connector (NPC) with single fibre with assembly tools\r\n', 'Per connector', 30.1),
('G2-54', 'Fix PVC Pipe up to 56mm Internal Diameter including Bracket and Saddle\r\n', 'Metre', 15.6),
('G2-55', 'Fix PVC Pipe 107mm Internal Diameter including Bracket and Saddle\r\n', 'Metre', 18.8),
('G2-56', 'Run and Fix Flexible Plastic Tube for Wiring Protection\r\n', 'Metre', 5.7),
('G2-57', 'Supply and On-site install Galvanized Iron Trunking (1.2mm thickness) 50mm x 50mm (including easy bends/adaptors/ accessories etc.)\r\n', 'Metre', 224.8),
('G2-58', 'Supply and On-site install Galvanized Iron Trunking (1.2mm thickness) 75mm x 75mm (including easy bends/adaptors/ accessories etc.)\r\n', 'Metre', 239.1),
('G2-59', 'Supply and On-site Install Galvanized Iron Trunking (1.2mm Thickness) 100mm x 100mm (including easy bends/adaptors/accessories etc.)\r\n', 'Metre', 262.2),
('G2-60', 'Supply and On-site Install Galvanized Iron Trunking (1.2mm Thickness) 150mm x 150mm (including easy bends/adaptors/accessories etc.)', 'Metre', 385.2),
('G2-69', 'Install PVC Trunking up to 100mm x 100 mm\r\n', 'Per metre', 49.1),
('G2-72', 'Cut Access Panel at Gypsum/Wooden Board Type False Ceiling and Make Good (400mm x 400mm)\r\n', 'Each', 1119.1),
('G2-73', 'Cut Access Panel at Gypsum/Wooden Board Type False Ceiling and Make Good (600mm x 600mm)\r\n', 'Each', 1171.9),
('G2-74', 'Cut Access Panel at Aluminium Type False Ceiling and Make Good (400mm x 400mm) \r\n', 'Each', 1130.4),
('G2-75', 'Cut Access Panel at Aluminium Type False Ceiling and Make Good (600mm x 600mm) \r\n', 'Each', 1246.3),
('G2-76', 'Dismantle and Reinstate Fragile/Complicated False Ceiling\r\n', 'Square', 61.4),
('G2-77', 'Cut and Make Good Hole on Dis-case up to 50mm Diameter\r\n', 'Each', 43.9),
('G2-78', 'Cut Hole on Metal Trunk up to 50mm Diameter/Square and Cushion with Rubber Grommet/Brushing', 'Each', 51.1),
('G2-79', 'Cut and Reinstate Hole Through Wall/Floor up to 30mm Diameter/Square', 'Each', 77.5),
('G2-80', 'Cut and Reinstate Hole Through Wall/Floor up to 40mm Diameter/Square', 'Each', 93.6),
('G2-81', 'Cut & Reinstate Hole through Wall/Floor up to 80mm diameter/square ', 'Each', 187.3),
('G2-82', 'Cut & Reinstate Hole through Wall/Floor up to 120mm diameter/square ', 'Each', 299),
('G2-83', 'Cut and Reinstate Hole Through Wall/Floor up to 150mm Diameter/Square', 'Each', 356.9),
('G2-84', 'Supply and Install 20mm Diameter Galvanized Iron Conduit to BS4568', 'Per metre', 81.3),
('G2-85', 'Supply and Install 25mm Diameter Galvanized Iron Conduit to BS4568', 'Per metre', 108.8),
('G2-86', 'Supply and Install 32mm Diameter Galvanized Iron Conduit to BS4568', 'Per metre', 103.9),
('G2-87', 'Supply and Install up to 32mm Diameter PVC Coated Flexible Metal Conduit/Flexible Metal Conduit', 'Per metre', 126.4),
('G2-88', 'Supply and Install 50mm Diameter PVC Coated Flexible Metal Conduit/Flexible Metal Conduit', 'Per metre', 145),
('H7.1', 'High Working Platform  Up to 5M height, 2 days per job ', 'Each ', 2000),
('H7.2', 'High Working Platform  Up to 5M height, 1 week per job', 'Each ', 3000),
('H7.3', 'High Working Platform  Up to 9M height, 2 days per job ', 'Each ', 4000),
('H7.4', 'High Working Platform  Up to 9M height, 1 week per job', 'Each ', 5000),
('MIS.1', 'Third Party Charges (eg BMO, Nom-Contractor...)', 'Man-hour', 65.2),
('MIS.2', '', 'Man-hour', 65.2);

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `engineeringteams`
--
ALTER TABLE `engineeringteams`
  ADD PRIMARY KEY (`team_id`),
  ADD KEY `username` (`username`);

--
-- 資料表索引 `hktcontrolstaffs`
--
ALTER TABLE `hktcontrolstaffs`
  ADD PRIMARY KEY (`staff_id`),
  ADD KEY `username` (`username`);

--
-- 資料表索引 `itemcases`
--
ALTER TABLE `itemcases`
  ADD PRIMARY KEY (`item_case_id`),
  ADD KEY `quotation_id` (`quotation_id`),
  ADD KEY `work_item_id` (`work_item_id`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_number`);

--
-- 資料表索引 `pendingcases`
--
ALTER TABLE `pendingcases`
  ADD PRIMARY KEY (`case_id`),
  ADD KEY `order_number` (`order_number`),
  ADD KEY `pending_reason_id` (`pending_reason_id`);

--
-- 資料表索引 `pendingreasons`
--
ALTER TABLE `pendingreasons`
  ADD PRIMARY KEY (`reason_id`);

--
-- 資料表索引 `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`quotation_id`),
  ADD KEY `order_number` (`order_number`);

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- 資料表索引 `workitems`
--
ALTER TABLE `workitems`
  ADD PRIMARY KEY (`work_item_id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `engineeringteams`
--
ALTER TABLE `engineeringteams`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表 AUTO_INCREMENT `hktcontrolstaffs`
--
ALTER TABLE `hktcontrolstaffs`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表 AUTO_INCREMENT `itemcases`
--
ALTER TABLE `itemcases`
  MODIFY `item_case_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `pendingcases`
--
ALTER TABLE `pendingcases`
  MODIFY `case_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `pendingreasons`
--
ALTER TABLE `pendingreasons`
  MODIFY `reason_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表 AUTO_INCREMENT `quotations`
--
ALTER TABLE `quotations`
  MODIFY `quotation_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- 已匯出資料表的限制(Constraint)
--

--
-- 資料表的 Constraints `engineeringteams`
--
ALTER TABLE `engineeringteams`
  ADD CONSTRAINT `engineeringteams_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`);

--
-- 資料表的 Constraints `hktcontrolstaffs`
--
ALTER TABLE `hktcontrolstaffs`
  ADD CONSTRAINT `hktcontrolstaffs_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`);

--
-- 資料表的 Constraints `itemcases`
--
ALTER TABLE `itemcases`
  ADD CONSTRAINT `itemcases_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotations` (`quotation_id`),
  ADD CONSTRAINT `itemcases_ibfk_2` FOREIGN KEY (`work_item_id`) REFERENCES `workitems` (`work_item_id`);

--
-- 資料表的 Constraints `pendingcases`
--
ALTER TABLE `pendingcases`
  ADD CONSTRAINT `pendingcases_ibfk_1` FOREIGN KEY (`order_number`) REFERENCES `orders` (`order_number`),
  ADD CONSTRAINT `pendingcases_ibfk_2` FOREIGN KEY (`pending_reason_id`) REFERENCES `pendingreasons` (`reason_id`);

--
-- 資料表的 Constraints `quotations`
--
ALTER TABLE `quotations`
  ADD CONSTRAINT `quotations_ibfk_1` FOREIGN KEY (`order_number`) REFERENCES `orders` (`order_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
