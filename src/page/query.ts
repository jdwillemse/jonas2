import {groq} from 'next-sanity'

export const PAGE_DATA_QUERY = groq`
  *[_type == 'project' && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "listImageUrl": listImage.asset->url,
    date,
    "client": client->name,
  }
`

export const PAGE_PATHS_QUERY = groq`
  *[_type == 'project' && defined(slug.current)]{
    'slug': slug.current
  }
`

export const PROJECT_COLLECTION_QUERY = groq`
 *[_type == 'project' && defined(slug.current)] | order(date desc) {   
    title
    "slug": slug.current,
    "listImageUrl": listImage.asset->url,
    "client": client->name,
  }
`

export const CLIENT_COLLECTION_QUERY = groq`
 *[_type == 'client' && defined(name)] | order(_createdAt desc) {
    name
  }
`
