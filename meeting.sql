delimiter $$

CREATE DATABASE `wxmeet` /*!40100 DEFAULT CHARACTER SET utf8 */$$

delimiter $$

CREATE TABLE `meeting` (
  `M_ID` varchar(64) NOT NULL,
  `M_NAME` varchar(64) NOT NULL,
  `M_ADDRESS` varchar(128) DEFAULT NULL,
  `M_TIME` varchar(128) DEFAULT NULL,
  `M_CONTENT` varchar(512) DEFAULT NULL,
  `M_STATUS` tinyint(4) DEFAULT '0',
  `U_ID` varchar(64) NOT NULL,
  PRIMARY KEY (`M_ID`,`M_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8$$

delimiter $$

CREATE TABLE `meeting_subscribe` (
  `U_ID` varchar(64) NOT NULL,
  `M_ID` varchar(64) NOT NULL,
  `ISPARTINT` tinyint(4) DEFAULT NULL,
  `REASON` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会议预约表'$$

delimiter $$

CREATE TABLE `meeting_time_schema` (
  `F_ID` varchar(64) NOT NULL,
  `M_ID` varchar(64) DEFAULT NULL,
  `DATE` varchar(45) DEFAULT NULL,
  `TIME` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`F_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会议时间方案表'$$

delimiter $$

CREATE TABLE `meeting_time_subscribe` (
  `U_ID` varchar(64) DEFAULT NULL,
  `M_ID` varchar(64) DEFAULT NULL,
  `F_ID` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会议时间预约表'$$

