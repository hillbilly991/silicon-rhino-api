import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'
import EventGuest from './EventGuest'
import User from './User'

class EventGuestComment extends Model {
    declare id: number
    declare timestamp: string
    declare message: string
    declare commenter_id: number
    declare event_id: number
}

EventGuestComment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'event_guest_comment',
})

EventGuestComment.belongsTo(EventGuest)

export default EventGuestComment
