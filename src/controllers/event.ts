import {
    Event,
    EventComment,
    EventGuest,
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
        }, {
            model: EventComment,
            as: 'comments',
            include: [User],
            attributes: {
                exclude: ['user_id', 'event_id']
            }
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
        }, {
            model: EventComment,
            as: 'comments',
            include: [User],
            attributes: {
                exclude: ['user_id', 'event_id']
            }
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
       time
    } = req.body
    const event = Event.build({
       title: title,
       creator_id: creator_id,
       location_id: location_id,
       type: type,
       time: time
    });
    try {
        await event.save()
        res.status(200).json(event)
    } catch(error) {
        res.status(500).json({
            error,
            message: "There was a very very big problem and the event couldn't be created"
        })
    }
}

const createComment = async (req: express.Request, res: express.Response) => {
    const {
        event_id,
        user_id,
        message,
        timestamp
    } = req.body
    const eventComment = EventComment.build({
        event_id: event_id,
        user_id: parseInt(user_id),
        message,
        timestamp: timestamp
    });
    try {
        await eventComment.save()
        res.status(200).json(eventComment)
    } catch(error) {
        res.status(500).json({
            error,
            message: "There was a very very big problem and the comment couldn't be created"
        })
    }
}

const registerToEvent = async (req: express.Request, res: express.Response) => {
    const {
        event_id,
        guest_id,
    } = req.body
    const eventGuest = EventGuest.build({
        event_id: event_id,
        guest_id: parseInt(guest_id),
    });
    try {
        await eventGuest.save()
        res.status(200).json(eventGuest)
    } catch(error) {
        res.status(500).json({
            error,
            message: "There was a very very big problem and the user could not register"
        })
    }
}

export {
    getEvents,
    getEvent,
    createEvent,
    createComment,
    registerToEvent
}
