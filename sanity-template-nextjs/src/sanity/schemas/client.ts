import type {SchemaTypeDefinition} from 'sanity'

export const clientSchema: SchemaTypeDefinition = {
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ],
}
