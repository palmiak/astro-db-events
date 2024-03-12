import { defineDb, defineTable, column } from "astro:db";

const EventCategories = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        name: column.text(),
    },
});

const Events = defineTable({
    columns: {
        id: column.number({primaryKey: true}),
        eventName: column.text(),
        date: column.date(),
        description: column.text(),
        country: column.text(),
        categoryId: column.number({ references: () => EventCategories.columns.id }),
    },
});

export default defineDb({
    tables: { EventCategories, Events },
});
