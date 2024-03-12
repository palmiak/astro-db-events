import { db, EventCategories, Events } from 'astro:db';

export default async function () {
    await db.insert(EventCategories).values([
        { id: 1, name: 'Podcast' },
        { id: 2, name: 'Webinar' },
        { id: 3, name: 'Live Event' },
    ])

    await db.insert(Events).values([
        { 
            id: 1, 
            date: "28.02.2024, 00:00:00",
            country: "Poland",
            eventName: "JS World Conference",
            categoryId: 3,
            description: "A conference for JavaScript developers"
        },
        { 
            id: 2, 
            date: "28.02.2024, 00:00:00",
            country: "USA",
            eventName: "OS Day 24",
            categoryId: 3,
            description: "A conference for JavaScript developers"
        },
    ])
}