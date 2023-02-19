import type {SchemaTypeDefinition} from 'sanity'

export const projectSchema: SchemaTypeDefinition = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Do not use the client’s name in the title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        // slugify: myAsyncSlugifier
      },
    },
    {
      title: 'Client',
      name: 'client',
      type: 'reference',
      to: [{type: 'client'}],
    },
    {
      title: 'Awards',
      name: 'awards',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Body',
      name: 'body',

      type: 'array',
      of: [{type: 'textBlock'}, {type: 'mediaRow'}],
    },
    {
      title: 'List image',
      name: 'listImage',
      type: 'image',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Social media title',
      name: 'metaTitle',
      type: 'string',
    },
    {
      title: 'Social media description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Social media image',
      name: 'metaImage',
      type: 'string',
    },
  ],
}
