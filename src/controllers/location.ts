import { Location } from '../models/export'
import * as express from 'express'

const getLocations = async (req: express.Request, res: express.Response) => {
    const locations = await Location.findAll()
    return res.status(200).json(locations);
}

export { getLocations }
