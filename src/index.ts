require('dotenv').config();
import express, { Application } from 'express'
import sequelize from './config/sequelize';
import {
  eventRouter,
  locationRouter,
  userRouter
} from './routes'
import {
  consumeDrinksApi
} from './services/consumeDrinksApi'
const cors = require('cors');
const schedule = require('node-schedule')
const app: Application = express()
const port = process.env.SERVER_PORT || '8080'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async (): Promise<void> => {
  try {
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
    await sequelize.sync({
      alter: true
    })
    schedule.scheduleJob('0 0 * * *', async () => {
      await consumeDrinksApi()
    });
    app.use(cors())
    app.use('/api/events', eventRouter)
    app.use('/api/locations', locationRouter)
    app.use('/api/users', userRouter)
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error, 'error');
    process.exit(1);
  }
};

void start();
