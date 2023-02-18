import {groq} from 'next-sanity'

export const PAGE_DATA_QUERY = groq`
  *[_type == 'project' && slug.current == "mtv"][0]{
    title,
    slug,
    subtitle,
    date,
    client->{name},
  }
`

export const PAGE_PATHS_QUERY = groq`
  *[_type == 'project' && defined(slug.current)]{
    'slug': slug.current
  }
`
