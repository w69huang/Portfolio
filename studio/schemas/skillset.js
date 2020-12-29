export default {
    name: 'skillset',
    title: 'Skillset',
    type: 'object',
    fields: [
        {
        name: 'skilltype',
        title: 'Skill Type',
        type: 'string',
        options: {
            list: [
                {value: 'language', title: 'Language'},
                {value: 'framework', title: 'Framework'},
                {value: 'other', title: 'Other'},
            ],
          },
        },
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
  