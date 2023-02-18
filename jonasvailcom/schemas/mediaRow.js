export default {
  name: 'mediaRow',
  type: 'object',
  title: 'MediaRow',
  fields: [
    {
      title: 'Text block',
      name: 'textBlock',
      type: 'textBlock',
    },
    {
      title: 'Media',
      name: 'media',
      type: 'array',
      of: [{type: 'image'}, {type: 'video'}],
    },
  ],
}
