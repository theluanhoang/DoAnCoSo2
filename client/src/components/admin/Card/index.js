import React from 'react'
import styles from './Card.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Card({ icon, title, quantity, description, bgr, color }) {
  return (
    <div className={cx('card')}>
      <div className={cx('card__icon')} style={{ backgroundColor: `${bgr}` }}>
        {
          icon === 'customers' ?
            (<i style={{ color: `${color}` }} className="fa-solid fa-users"></i>) :
            ''
        }
        {
          icon === 'products' ?
            (<i style={{ color: `${color}` }} className="fa-solid fa-database"></i>) :
            ''
        }
        {
          icon === 'orders' ?
            (<i style={{ color: `${color}` }} className="fa-solid fa-bag-shopping"></i>) :
            ''
        }
        {
          icon === 'warn' ?
            (<i style={{ color: `${color}` }} className="fa-solid fa-triangle-exclamation"></i>) :
            ''
        }
      </div>
      <div className={cx('card__content')}>
        <h4 className={cx('card__content--title')}>{title}</h4>
        <p className={cx('card__content--quantity')}><b>{quantity}</b></p>
        <p className={cx('card__content--description')}>{description}</p>
        <div ></div>

      </div>
    </div>
  )
}

export default Card