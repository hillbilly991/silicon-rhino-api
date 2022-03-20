require('dotenv').config();
import express, { Application } from 'express'
import sequelize from './config/sequelize';
const app: Application = express()
const port = process.env.SERVER_PORT || '8080'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async (): Promise<void> => {
  try {
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
    await sequelize.sync({
      force: true
    })
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error, 'error');
    process.exit(1);
  }
};

void start();
