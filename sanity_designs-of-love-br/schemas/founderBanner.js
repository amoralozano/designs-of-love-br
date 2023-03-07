export default {
  name: 'founderbanner',
  title: 'FounderBanner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
  ],
}
