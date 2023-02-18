import type {SchemaTypeDefinition} from 'sanity'

export const videoSchema: SchemaTypeDefinition = {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
}
