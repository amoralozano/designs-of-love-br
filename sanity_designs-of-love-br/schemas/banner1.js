export default {
  name: 'banner1',
  title: 'Banner1',
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
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },

    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    },

    {
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    },

    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
  ],
}
