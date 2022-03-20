import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'
import User from './User'
import Event from './Event'

class EventGuest extends Model {
    declare id: number
    declare event_id: number
    declare guest_id: number
}

EventGuest.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'event_guest',
     underscored: true
})

User.belongsToMany(Event, {
    as: 'events',
    through: EventGuest,
    foreignKey: 'event_id'
})

Event.belongsToMany(User, {
    as: 'guests',
    through: EventGuest,
    foreignKey: 'guest_id'
})

export default EventGuest
