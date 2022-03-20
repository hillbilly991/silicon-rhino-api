import { User } from '../models/export'
import * as express from 'express'

export const getUsers = async (req: express.Request, res: express.Response) => {
    const users = await User.findAll()
    return res.status(200).json(users);
}
