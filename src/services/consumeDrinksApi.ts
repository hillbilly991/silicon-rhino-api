import axios from 'axios'
import {
    Event,
    Location,
    User
} from '../models/export'

export const consumeDrinksApi = async () => {
    const { data } = await axios.get('https://mock-api.drinks.test.siliconrhino.io/events')

    data.forEach(async (event: any) => {
        const guestUsers = []
        for(const i in event.guests) {
            const guest = event.guests[i]
            guestUsers.push({
                name: guest.name,
                avatar_url: guest.avatarUrl
            })
        }
        await User.bulkCreate(guestUsers)
        const creator = await User.create({
            name: event.creator.name,
            avatar_url: event.creator.avatarUrl
        })
        const location = await Location.create({
            name: event.location.name,
            longitude: event.location.longitude,
            latitude: event.location.latitude
        })
        const eventBuilt = Event.build({
           title: event.title,
           creator_id: creator.id,
           location_id: location.id,
           type: event.type,
           time: event.time,
        });

        await eventBuilt.save()
    })

}
