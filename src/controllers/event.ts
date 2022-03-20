import {
    Event,
    Location,
    User
} from '../models/export'
import * as express from 'express'

const getEvents = async (req: express.Request, res: express.Response) => {
    const events = await Event.findAll({
         attributes: {
            exclude: ['location_id', 'creator_id']
        },
        include: [{
            model: User,
            as: 'guests',
            attributes: {
                include: ['name', 'id', 'avatar_url'],
            },
            through: {
                attributes: []
            }
        }, {
            model: User,
            as: 'creator',
        }, {
            model: Location,
        }],
    })

    return res.status(200).json(events);
}

const getEvent = async (req: express.Request, res: express.Response) => {
    const eventId = req.params.id
    const event = await Event.findByPk(eventId, {
        attributes: {
            exclude: ['location_id', 'creator_id']
        },
        include: [{
            model: User,
            as: 'guests',
            attributes: {
                include: ['name', 'id', 'avatar_url'],
            },
            through: {
                attributes: []
            }
        }, {
            model: User,
            as: 'creator'
        }, {
            model: Location
        }],
    })
    return res.status(200).json(event);
}

const createEvent = async (req: express.Request, res: express.Response) => {
   const {
       creator_id,
       location_id,
       type,
       title,
       timestamp
   } = JSON.parse(req.body.data)
   const event = Event.build({
       title: title,
       creator_id: creator_id,
       location_id: location_id,
       type: type,
       timestamp: timestamp
    });

}

const createComment = async (req: express.Request, res: express.Response) => {

}

const registerToEvent = async (req: express.Request, res: express.Response) => {

}

export {
    getEvents,
    getEvent,
    createEvent,
    createComment,
    registerToEvent
}
