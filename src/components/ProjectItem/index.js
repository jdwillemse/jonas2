import React from 'react'
import Image from 'next/image'

import css from './styles.module.scss'
import Link from 'next/link'

const ProjectItem = ({title, slug, client, listImage, previewImage}) => {
  return (
    <article className={css.wrap}>
      <Link href={slug} className={css.link}>
        <div className={css.imageWrap}>
          {listImage && (
            <Image
              src={listImage.url}
              width={listImage.width}
              height={listImage.height}
              alt=""
              // placeholder="blur"
              // blurDataURL={previewImage}
              sizes="50vw"
            />
          )}
        </div>
        <h1 className={css.title}>{title}</h1>
        {client?.name && <div className={css.client}>{client.name}</div>}
      </Link>
    </article>
  )
}

ProjectItem.propTypes = {
  // children: PropTypes.node.isRequired,
}

export default ProjectItem
