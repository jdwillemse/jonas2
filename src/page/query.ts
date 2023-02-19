import {groq} from 'next-sanity'

export const PAGE_DATA_QUERY = groq`
  *[_type == 'project' && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    title,
    "slug": slug.current,
    "listImageUrl": listImage.asset->url,
    date,
    "client": client->name,
  }
`

export const PAGE_PATHS_QUERY = groq`
  *[_type == 'project' && defined(slug.current) && !(_id in path('drafts.**'))]{
    'slug': slug.current
  }
`

export const PROJECT_COLLECTION_QUERY = groq`
 *[_type == 'project' && defined(slug.current) && !(_id in path('drafts.**'))] | order(date desc) {   
    _id,
    title,
    "slug": slug.current,
    "listImage": listImage.asset->{
      url,
      "width": metadata.dimensions.width, 
      "height": metadata.dimensions.height},
    "client": client->name,
  }
`

export const CLIENT_COLLECTION_QUERY = groq`
 *[_type == 'client' && defined(name) && !(_id in path('drafts.**'))] | order(_createdAt desc) {
    _id,
    name
  }
`
