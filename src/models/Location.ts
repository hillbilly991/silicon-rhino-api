import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'

class Location extends Model {
  declare id: number
  declare name: string
  declare longitude: number
  declare latitude: number
}

Location.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'location',
})

export default Location
