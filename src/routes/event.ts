import { Router } from 'express';
import {
    getEvents,
    getEvent,
    createEvent,
    createComment,
    registerToEvent
} from '../controllers/event'

const eventRouter = Router();

eventRouter.get('/', getEvents);

eventRouter.get('/:id', getEvent);

eventRouter.post('/', createEvent);

eventRouter.post('/comments', createComment);

eventRouter.post('/register', registerToEvent);


export { eventRouter };
