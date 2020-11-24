const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes)=>{
    class userdestination extends Model {};
    userdestination.init({
        user_id: DataTypes.INTEGER,
        destination_id: DataTypes.INTEGER,
    }, {
        sequelize, modelName: 'userdestination', 
    });
    return userdestination;
};