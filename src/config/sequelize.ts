require('dotenv').config();
import { Dialect, Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql' as Dialect,
    logQueryParameters: true,
    define: {
        timestamps: true,
        paranoid: true,
        underscored: true
    },
})

export default sequelize
