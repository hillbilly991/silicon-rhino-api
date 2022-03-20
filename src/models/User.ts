import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/sequelize'
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
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'https://i0.wp.com/eikongroup.co.uk/wp-content/uploads/2017/04/Blank-avatar.png?ssl=1'
  },
},
{
  sequelize,
  modelName: 'user'
})

export default User
