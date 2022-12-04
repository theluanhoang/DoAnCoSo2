import React from 'react'
import styles from './Overlay.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Overlay() {
  return (
    <div className={cx('Overlay')}></div>
  )
}

export default Overlay