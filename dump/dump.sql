CREATE TABLE IF NOT EXISTS settings 
  ( 
     id                   INTEGER NOT NULL auto_increment, 
     browser              VARCHAR(255) DEFAULT 'chrome', 
     incognito            TINYINT(1) DEFAULT false, 
     wait_target_time      INTEGER(11) DEFAULT 295, 
     visit_within         TINYINT(1) DEFAULT false, 
     visit_from_page      INTEGER(11) DEFAULT true, 
     visit_to_time         INTEGER(11) DEFAULT 3050, 
     complete_wait_time    INTEGER(11) DEFAULT 310, 
     no_sites_max         INTEGER(11) DEFAULT 10, 
     no_sites_wait_time    INTEGER(11) DEFAULT 120, 
     reset_after          INTEGER(11) DEFAULT 1, 
     device_reset         TINYINT(1) DEFAULT false, 
     vinn_reset           TINYINT(1) DEFAULT false, 
     phone_reset          TINYINT(1) DEFAULT true, 
     mobile_reset         TINYINT(1) DEFAULT true, 
     fly_mode             TINYINT(1) DEFAULT false, 
     remove_cookies       TINYINT(1) DEFAULT true, 
     change_resolution    TINYINT(1) DEFAULT false, 
     mouse_tracks         TINYINT(1) DEFAULT false, 
     data_saving          TINYINT(1) DEFAULT true, 
     random_generate      TINYINT(1) DEFAULT false, 
     analytics_protection TINYINT(1) DEFAULT true, 
     remove_history       TINYINT(1) DEFAULT false, 
     createdat            DATETIME DEFAULT NOW(), 
     updatedat            DATETIME DEFAULT NOW(), 
     PRIMARY KEY (id) 
  ) 
engine=innodb;

INSERT INTO ad_words.settings VALUES();