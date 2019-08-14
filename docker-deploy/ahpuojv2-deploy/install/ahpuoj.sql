-- MySQL Script generated by MySQL Workbench
-- 2019年05月10日 星期五 04时32分00秒
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema oj
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema oj
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `oj` DEFAULT CHARACTER SET utf8mb4 ;
USE `oj` ;

-- -----------------------------------------------------
-- Table `oj`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(40) NULL,
  `username` VARCHAR(20) NOT NULL,
  `nick` VARCHAR(20) NOT NULL,
  `avatar` VARCHAR(100) NOT NULL,
  `passsalt` VARCHAR(16) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `submit` INT NOT NULL DEFAULT 0,
  `solved` INT NOT NULL DEFAULT 0,
  `defunct` TINYINT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `is_compete_user` TINYINT NOT NULL DEFAULT 0,
  `role_id` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE INDEX `username_UNIQUE` USING BTREE (`username`) VISIBLE,
  UNIQUE INDEX `nick_UNIQUE` (`nick` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `oj`.`problem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`problem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(20) NOT NULL,
  `description` TEXT NULL,
  `level` TINYINT NOT NULL DEFAULT 0,
  `input` TEXT NULL,
  `output` TEXT NULL,
  `sample_input` TEXT NULL,
  `sample_output` TEXT NULL,
  `spj` TINYINT NULL,
  `hint` TEXT NULL,
  `defunct` TINYINT NOT NULL DEFAULT 1,
  `time_limit` INT NOT NULL DEFAULT 0,
  `memory_limit` INT NOT NULL DEFAULT 0,
  `accepted` INT NOT NULL DEFAULT 0,
  `submit` INT NOT NULL DEFAULT 0,
  `solved` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE INDEX `title_UNIQUE` USING BTREE (`title`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE INDEX `name_UNIQUE` USING BTREE (`name`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`problem_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`problem_tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `problem_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `problem_id_index` (`problem_id` ASC) VISIBLE,
  INDEX `tag_id_index` (`tag_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`new`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`new` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(20) NOT NULL,
  `content` TEXT NULL,
  `top` INT NOT NULL DEFAULT 0,
  `defunct` TINYINT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  UNIQUE INDEX `title_UNIQUE` USING BTREE (`title`) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `description` TEXT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `is_deleted` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY USING BTREE (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`team_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`team_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `team_id_index` (`team_id` ASC) VISIBLE,
  INDEX `user_id_index` (`user_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`contest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`contest` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `defunct` TINYINT NOT NULL DEFAULT 0,
  `description` TEXT NULL,
  `private` TINYINT NOT NULL DEFAULT 0,
  `team_mode` TINYINT NOT NULL DEFAULT 0,
  `langmask` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  `is_deleted` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY USING BTREE (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`contest_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`contest_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contest_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `contest_id_index` (`contest_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`contest_team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`contest_team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contest_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `contest_id_index` (`contest_id` ASC) VISIBLE,
  INDEX `team_id_index` (`team_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`contest_team_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`contest_team_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contest_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `contest_id_index` (`contest_id` ASC) VISIBLE,
  INDEX `team_id_index` (`team_id` ASC) VISIBLE,
  INDEX `user_id_index` (`user_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`series`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`series` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `description` TEXT NULL,
  `defunct` TINYINT NOT NULL DEFAULT 0,
  `team_mode` TINYINT NOT NULL DEFAULT 0,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  `is_deleted` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY USING BTREE (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`contest_series`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`contest_series` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contest_id` INT NOT NULL,
  `series_id` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `contest_id_index` (`contest_id` ASC) VISIBLE,
  INDEX `series_id_index` (`series_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`contest_problem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`contest_problem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contest_id` INT NOT NULL,
  `problem_id` INT NOT NULL,
  `num` INT NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `contest_id_index` (`contest_id` ASC) VISIBLE,
  INDEX `problem_id_index` (`problem_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = FIXED;


-- -----------------------------------------------------
-- Table `oj`.`solution`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`solution` (
  `solution_id` INT NOT NULL AUTO_INCREMENT,
  `problem_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `contest_id` INT NOT NULL DEFAULT 0,
  `num` TINYINT NOT NULL DEFAULT 0,
  `time` INT NOT NULL DEFAULT 0,
  `memory` INT NOT NULL DEFAULT 0,
  `in_date` DATETIME NOT NULL,
  `result` SMALLINT NOT NULL,
  `language` SMALLINT NOT NULL,
  `ip` VARCHAR(48) NOT NULL,
  `judgetime` DATETIME NULL,
  `valid` TINYINT NOT NULL DEFAULT 1,
  `code_length` INT NOT NULL,
  `pass_rate` DECIMAL(3,2) NOT NULL DEFAULT 0,
  `lint_error` INT NOT NULL DEFAULT 0,
  `judger` VARCHAR(48) NULL,
  PRIMARY KEY (`solution_id`),
  INDEX `problem_id_index` (`problem_id` ASC) VISIBLE,
  INDEX `user_id_index` (`user_id` ASC) VISIBLE,
  INDEX `team_id_index` (`team_id` ASC) VISIBLE,
  INDEX `contest_id_index` (`contest_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `oj`.`source_code`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`source_code` (
  `solution_id` INT NOT NULL AUTO_INCREMENT,
  `source` TEXT NOT NULL,
  `public` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`solution_id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `oj`.`compileinfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`compileinfo` (
  `solution_id` INT NOT NULL AUTO_INCREMENT,
  `error` TEXT NOT NULL,
  PRIMARY KEY (`solution_id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `oj`.`runtimeinfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`runtimeinfo` (
  `solution_id` INT NOT NULL AUTO_INCREMENT,
  `error` TEXT NOT NULL,
  PRIMARY KEY (`solution_id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `oj`.`issue`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`issue` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(20) NOT NULL,
  `problem_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `is_deleted` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `user_id_index` (`user_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `oj`.`reply`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oj`.`reply` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `reply_user_id` INT NOT NULL,
  `reply_id` INT NOT NULL,
  `issue_id` INT NOT NULL,
  `content` TEXT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  `status` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `user_id_index` (`user_id` ASC) VISIBLE,
  INDEX `topic_id_index` (`issue_id` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
ROW_FORMAT = DYNAMIC;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `oj`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `oj`;
INSERT INTO `oj`.`user` (`id`, `email`, `username`, `nick`, `avatar`, `passsalt`, `password`, `submit`, `solved`, `defunct`, `created_at`, `updated_at`, `is_compete_user`, `role_id`) VALUES (1, '', 'admin', 'admin', 'upload/avatars/default_avatar.png', 'abcdefghijklmnop', '72bd4f7ef86a8492eba63b96ee11d1f329fff8cc', 0, 0, 0, 'NOW()', 'NOW()', 0, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `oj`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `oj`;
INSERT INTO `oj`.`role` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES (1, 'user', '', '', '');
INSERT INTO `oj`.`role` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES (2, 'admin', '', '', '');

COMMIT;
