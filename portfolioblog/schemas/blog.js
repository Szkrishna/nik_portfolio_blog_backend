export default {
    type: 'document',
    name: 'blog',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content',
        },
        {
            name: 'timeStamp',
            type: 'datetime',
            title: 'Timestamp',
        },
    ],
};