import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'

import {LazyPreviewPage} from '../page/LazyPreviewPage'
import {LoadingScreen} from '../page/LoadingScreen'
import {CLIENT_COLLECTION_QUERY, PAGE_DATA_QUERY, PROJECT_COLLECTION_QUERY} from '../page/query'
import {PageData} from '../page/types'
import {client} from '../sanity/client'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'

interface PageProps {
  data: PageData | null
  preview: boolean
  slug: string | null
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const {preview = false, previewData = {}} = ctx

  const params = {slug: 'home'}

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params?.slug || null,
        token: previewData.token,
      },
    }
  }

  const clientCollection = await client.fetch<PageData | null>(CLIENT_COLLECTION_QUERY, params)
  const projectCollection = await client.fetch<PageData | null>(PROJECT_COLLECTION_QUERY, params)

  return {
    props: {
      clientCollection,
      projectCollection,
      preview,
      slug: params?.slug || null,
      token: null,
    },
  }
}

export default function Page(props: PageProps) {
  const {preview, slug, token} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage slug={slug} token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <Layout {...props}>
      <ProjectList {...props} />
    </Layout>
  )
}
