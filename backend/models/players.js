/* jshint indent: 2 */
const connection = require('../database/database');
const DataTypes = require("sequelize");

const players = connection.define("players", {
    sofifa_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    player_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    short_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    long_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    height_cm: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    weight_kg: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    club: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    overall: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    potential: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    value_eur: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    wage_eur: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    player_positions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    preferred_foot: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    international_reputation: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    weak_foot: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    skill_moves: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    work_rate: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    body_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    real_face: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    release_clause_eur: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    player_tags: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    team_position: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    team_jersey_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loaned_from: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    joined: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    contract_valid_until: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nation_position: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nation_jersey_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pace: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shooting: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    passing: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dribbling: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    defending: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    physic: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gk_diving: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gk_handling: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gk_kicking: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gk_reflexes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gk_speed: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gk_positioning: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    player_traits: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    attacking_crossing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    attacking_finishing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    attacking_heading_accuracy: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    attacking_short_passing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    attacking_volleys: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    skill_dribbling: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    skill_curve: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    skill_fk_accuracy: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    skill_long_passing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    skill_ball_control: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    movement_acceleration: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    movement_sprint_speed: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    movement_agility: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    movement_reactions: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    movement_balance: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    power_shot_power: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    power_jumping: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    power_stamina: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    power_strength: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    power_long_shots: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mentality_aggression: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mentality_interceptions: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mentality_positioning: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mentality_vision: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mentality_penalties: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mentality_composure: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    defending_marking: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    defending_standing_tackle: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    defending_sliding_tackle: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    goalkeeping_diving: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    goalkeeping_handling: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    goalkeeping_kicking: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    goalkeeping_positioning: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    goalkeeping_reflexes: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ls: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    st: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rs: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lw: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lf: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cf: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rf: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rw: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ram: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lcm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rcm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lwb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ldm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cdm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rdm: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rwb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lcb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rcb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rb: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    team_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    favorites_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    cart_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'players',
    timestamps: false,
  });
  
module.exports = players;
