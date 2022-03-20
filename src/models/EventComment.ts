import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'
import User from './User'
import Event from './Event'

class EventComment extends Model {
    declare id: number
    declare timestamp: string
    declare message: string
    declare event_id: number
    declare commenter_id: number
}

EventComment.init({
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
    modelName: 'event_comment',
    timestamps: true,
    underscored: true
})

Event.hasMany(EventComment, {
    as: 'comments',
    foreignKey: 'event_id'
})

EventComment.belongsTo(User, {
    foreignKey: 'user_id'
})

export default EventComment
