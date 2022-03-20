import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'
import EventComment from './EventComment'
import Event from './Event'
class User extends Model {
  declare id: number
  declare name: string
  declare avatarUrl: string
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'https://i0.wp.com/eikongroup.co.uk/wp-content/uploads/2017/04/Blank-avatar.png?ssl=1'
  },
},
{
  sequelize,
  modelName: 'user',
  timestamps: true,
  underscored: true
})

export default User
