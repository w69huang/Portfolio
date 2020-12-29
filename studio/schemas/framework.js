export default {
    name: 'framework',
    title: 'Framework',
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
  