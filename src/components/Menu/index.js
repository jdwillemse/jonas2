import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import classNames from 'classnames'

import css from './styles.module.scss'
import linkResolver from '../../utils/linkResolver'

// component
// ========================================================================
const Menu = ({clientCollection = [], projectCollection = []}) => {
  const router = useRouter()
  const query = router.query.client
  const pathname = router.asPath

  console.log(clientCollection, projectCollection)

  return (
    <nav>
      <Link
        href="/"
        className={classNames(css.link, {
          [css.active]: pathname === '/' && !query,
        })}
      >
        <span className={css.linkInner}>Clients</span>
      </Link>
      <div className={css.clientWrap}>
        {clientCollection.map(({name, _id}) => {
          const filteredProjects = projectCollection.filter(({client}) => client === name)
          if (!filteredProjects.length) {
            return null
          }
          const href = filteredProjects.length > 1 ? `/?client=${name}` : filteredProjects[0].slug

          return (
            <Link
              href={href}
              key={_id}
              className={classNames(css.link, {
                [css.active]: query === name,
              })}
            >
              <span className={css.linkInner}>{name}</span>
            </Link>
          )
        })}
      </div>
      <Link
        href="/about"
        className={classNames(css.link, {
          [css.active]: pathname === '/about',
        })}
      >
        <span className={css.linkInner}>About</span>
      </Link>
      <a href="mailto:jonasvail@gmail.com?Subject=Hoi%20Hoi%20Hello!" className={css.link}>
        <span className={css.linkInner}>Contact</span>
      </a>
    </nav>
  )
}

export default Menu
