import React from 'react'
import Link from 'next/link'

import css from './styles.module.scss'

const Grid = () => (
  <header className={css.wrap}>
    <Link href="/" className={css.logo}>
      Jonas Vail
    </Link>
    <div>Brand and Advertising Strategy Consultant</div>
  </header>
)

export default Grid
