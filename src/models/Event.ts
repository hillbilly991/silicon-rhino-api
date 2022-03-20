import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'
import User from './User';
import Location from './Location'
import EventComment from './EventComment'

class Event extends Model {
  declare id: number
  declare time: string
  declare title: string
  declare type: 'BEERS' |
        'COCKTAILS' |
        'COFFEES'|
        'MILKSHAKES';
}

Event.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'event',
    underscored: true,
})

Event.belongsTo(User, {
    foreignKey: 'creator_id',
    as: 'creator'
})

Event.belongsTo(Location, {
    foreignKey: 'location_id'
})

export default Event
