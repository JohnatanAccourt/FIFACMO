CREATE DATABASE FIFAMALL;

    USE FIFAMALL;

CREATE TABLE USERS (
    user_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR(30) NOT NULL,
    password_user VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL
);

CREATE TABLE PLAYERS (
    sofifa_id INT(10) PRIMARY KEY,
    player_url VARCHAR(255),
    short_name VARCHAR(50),
    long_name VARCHAR(100),
    age INT,
    dob VARCHAR(10),
    height_cm INT,
    weight_kg INT,
    nationality VARCHAR(30),
    club TEXT,
    overall INT,
    potential INT,
    value_eur INT,
    wage_eur INT,
    player_positions VARCHAR(255),
    preferred_foot VARCHAR(10),
    international_reputation INT,
    weak_foot INT,
    skill_moves INT,
    work_rate VARCHAR(30),
    body_type VARCHAR(50),
    real_face VARCHAR(10),
    release_clause_eur INT,
    player_tags VARCHAR(255),
    team_position VARCHAR(5),
    team_jersey_number INT,
    loaned_from TEXT,
    joined VARCHAR(10),
    contract_valid_until INT,
    nation_position VARCHAR(5),
    nation_jersey_number INT,
    pace INT,
    shooting INT,
    passing INT,
    dribbling INT,
    defending INT,
    physic INT,
    gk_diving INT,
    gk_handling INT,
    gk_kicking INT,
    gk_reflexes INT,
    gk_speed INT,
    gk_positioning INT,
    player_traits VARCHAR(255),
    attacking_crossing VARCHAR(10),
    attacking_finishing VARCHAR(10),
    attacking_heading_accuracy VARCHAR(10),
    attacking_short_passing VARCHAR(10),
    attacking_volleys VARCHAR(10),
    skill_dribbling VARCHAR(10),
    skill_curve VARCHAR(10),
    skill_fk_accuracy VARCHAR(10),
    skill_long_passing VARCHAR(10),
    skill_ball_control VARCHAR(10),
    movement_acceleration VARCHAR(10),
    movement_sprint_speed VARCHAR(10),
    movement_agility VARCHAR(10),
    movement_reactions VARCHAR(10),
    movement_balance VARCHAR(10), 
    power_shot_power VARCHAR(10),
    power_jumping VARCHAR(10),
    power_stamina VARCHAR(10),
    power_strength VARCHAR(10),
    power_long_shots VARCHAR(10),
    mentality_aggression VARCHAR(10),
    mentality_interceptions VARCHAR(10),
    mentality_positioning VARCHAR(10),
    mentality_vision VARCHAR(10),
    mentality_penalties VARCHAR(10),
    mentality_composure VARCHAR(10),
    defending_marking VARCHAR(10),
    defending_standing_tackle VARCHAR(10),
    defending_sliding_tackle VARCHAR(10),
    goalkeeping_diving VARCHAR(10),
    goalkeeping_handling VARCHAR(10),
    goalkeeping_kicking VARCHAR(10),
    goalkeeping_positioning VARCHAR(10),
    goalkeeping_reflexes VARCHAR(10),
    ls VARCHAR(10),
    st VARCHAR(10),
    rs VARCHAR(10),
    lw VARCHAR(10),
    lf VARCHAR(10),
    cf VARCHAR(10),
    rf VARCHAR(10),
    rw VARCHAR(10),
    lam VARCHAR(10),
    cam VARCHAR(10),
    ram VARCHAR(10),
    lm VARCHAR(10),
    lcm VARCHAR(10),
    cm VARCHAR(10),
    rcm VARCHAR(10),
    rm VARCHAR(10),
    lwb VARCHAR(10),
    ldm VARCHAR(10),
    cdm VARCHAR(10),
    rdm VARCHAR(10),
    rwb VARCHAR(10),
    lb VARCHAR(10),
    lcb VARCHAR(10),
    cb VARCHAR(10),
    rcb VARCHAR(10),
    rb VARCHAR(10),
    team_id INT(6),
    favorites_id INT(6),
    cart_id INT(6)
);

CREATE TABLE TEAMS (
    team_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name_team VARCHAR(30) NOT NULL,
    budget BIGINT DEFAULT 100000000,
    user_id INT(6),
    sofifa_id INT(10),

    CONSTRAINT FK_sofifa_id_TEAMS FOREIGN KEY (sofifa_id) references PLAYERS (sofifa_id),
    CONSTRAINT FK_user_id_TEAMS FOREIGN KEY (user_id) REFERENCES USERS (user_id)
);

CREATE TABLE CART (
    cart_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    sofifa_id INT(10),
    team_id INT(6),

    CONSTRAINT FK_sofifa_id_CART FOREIGN KEY (sofifa_id) REFERENCES PLAYERS (sofifa_id),
    CONSTRAINT FK_team_id_CART FOREIGN KEY (team_id) REFERENCES TEAMS (team_id)
);

CREATE TABLE FAVORITE (
    favorites_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    sofifa_id INT(10),
    team_id INT(6),

    CONSTRAINT FK_sofifa_id_FAVORITE FOREIGN KEY (sofifa_id) REFERENCES PLAYERS (sofifa_id),
    CONSTRAINT FK_team_id_FAVORITE FOREIGN KEY (team_id) REFERENCES TEAMS (team_id)
);

CREATE TABLE SQUAD (
    squad_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    sofifa_id INT(10),
    team_id INT(6),

    CONSTRAINT FK_sofifa_id_SQUAD FOREIGN KEY (sofifa_id) REFERENCES PLAYERS (sofifa_id),
    CONSTRAINT FK_team_id_SQUAD FOREIGN KEY (team_id) REFERENCES TEAMS (team_id)
);

CREATE TABLE PUCHARSE_PROPOSAL (
    pucharse_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    value_pucharse BIGINT,
    message VARCHAR(150),
    proposal_pucharse_accepted BOOLEAN,
    notifications_id INT,
    team_id INT(10)
);

CREATE TABLE LOAN_PROPOSAL (
    loan_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(150),
    contract_time CHAR(2),
    value_loan BIGINT,
    proposal_loan_accepted BOOLEAN,
    notifications_id INT,
    team_id INT(10)
);

CREATE TABLE NOTIFICATIONS (
    notifications_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    propose_value INT(11) NOT NULL,
    message VARCHAR(255) DEFAULT NULL,
    team_id_received INT(6) NOT NULL,
    team_id_sent INT(6) NOT NULL,
    player_id INT(6) NOT NULL,
    team_img VARCHAR(255) DEFAULT NULL,
    allow_btn VARCHAR(7) DEFAULT 'false',
    notification_read VARCHAR(7) DEFAULT 'false',
    notification_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER NOTIFICATIONS
ADD team_name VARCHAR(10) NOT NULL;

ALTER NOTIFICATIONS
ADD player_value int(11) NOT NULL;

ALTER PUCHARSE_PROPOSAL
ADD CONSTRAINT FK_notifications_id_PUCHARSE FOREIGN KEY (notifications_id) REFERENCES NOTIFICATIONS (notifications_id),
ADD CONSTRAINT FK_team_id_PUCHARSE FOREIGN KEY (team_id) REFERENCES TEAMS (team_id);

ALTER LOAN_PROPOSAL
ADD CONSTRAINT FK_notifications_id_LOAN FOREIGN KEY (notifications_id) REFERENCES NOTIFICATIONS (notifications_id),
ADD CONSTRAINT FK_team_id_LOAN FOREIGN KEY (team_id) REFERENCES TEAMS (team_id);

ALTER NOTIFICATIONS
ADD CONSTRAINT FK_team_id_NOTIFICATIONS FOREIGN KEY (team_id) REFERENCES TEAMS (team_id);

ALTER PLAYERS
ADD CONSTRAINT FK_team_id_PLAYER FOREIGN KEY (team_id) REFERENCES TEAMS (team_id);


ALTER TEAMS
ADD CONSTRAINT FK_sofifa_id_TEAMS FOREIGN KEY (sofifa_id) references PLAYERS (sofifa_id),
ADD CONSTRAINT FK_user_id_TEAMS FOREIGN KEY (user_id) REFERENCES USERS (user_id);


ALTER CART
ADD CONSTRAINT FK_sofifa_id_CART FOREIGN KEY (sofifa_id) REFERENCES PLAYERS (sofifa_id),
ADD CONSTRAINT FK_team_id_CART FOREIGN KEY (team_id) REFERENCES TEAMS (team_id);


ALTER FAVORITE
ADD CONSTRAINT FK_sofifa_id_FAVORITE FOREIGN KEY (sofifa_id) REFERENCES PLAYERS (sofifa_id),
ADD CONSTRAINT FK_team_id_FAVORITE FOREIGN KEY (team_id) REFERENCES TEAMS (team_id);



