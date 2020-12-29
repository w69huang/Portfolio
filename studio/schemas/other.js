export default {
    name: 'other',
    title: 'Other',
    type: 'object',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
    ]
  }
  