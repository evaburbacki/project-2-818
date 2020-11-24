const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes)=>{
    class destinations extends Model {
       static associate(models){
           models.destinations.belongsToMany(models.user, {through: 'userdestination'})
       } //
    };
    destinations.init({
        destination_name: DataTypes.STRING, // postgres naming convension is to use snake case (underscore)
        description: DataTypes.TEXT,
        location: DataTypes.JSONB, // stores data in a decomposed json binary form
        photo_path: DataTypes.TEXT,
    }, {
        sequelize, modelName: 'destinations', 
    });
    return destinations;
};
