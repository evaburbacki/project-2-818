const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes)=>{
    class userdestination extends Model {
       static associate(models){
           models.userdestination.belongsToMany(models.user, {through: ''})
       } 
    };
    userdestination.init({
        userId: DataTypes.INTEGER,
        destinationsId: DataTypes.INTEGER,
        userdestinationId: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
    }, {
        sequelize, modelName: 'userdestination', 
    });
    return userdestination;
};