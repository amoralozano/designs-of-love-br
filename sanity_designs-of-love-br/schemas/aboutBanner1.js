export default {
  name: 'aboutbanner1',
  title: 'AboutBanner1',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
  ],
}
