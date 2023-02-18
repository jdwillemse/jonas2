export default {
  name: 'textBlock',
  type: 'object',
  title: 'TextBlock',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
