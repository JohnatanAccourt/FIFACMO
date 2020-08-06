'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'name_user', {
      name_user:{
        unique: true
      }
    })

    await queryInterface.changeColumn('teams', 'name_team', {
      name_team:{
        unique: true
      }
    })

    await queryInterface.changeColumn('teams', 'budget', {
      budget:{
        allowNull: false
      }
    })

    // await queryInterface.addColumn('teams', 'leagues', { 
    //   leagues:{
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     defaultValue: '0'
    //   }
    // });

    // await queryInterface.addColumn('teams', 'cups', { 
    //   cups:{
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     defaultValue: '0'
    //   }
    // });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'name_user', {
      name_user:{
        unique: false
      }
    })

    await queryInterface.changeColumn('teams', 'name_team', {
      name_team:{
        unique: false
      }
    })

    await queryInterface.changeColumn('teams', 'budget', {
      budget:{
        allowNull: true
      }
    })

    // await queryInterface.removeColumn('teams', 'leagues');

    // await queryInterface.removeColumn('teams', 'cups');
  }
};
