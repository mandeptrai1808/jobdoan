'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messengers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messengers.init({
    userid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    usertype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'messengers',
  });
  return messengers;
};