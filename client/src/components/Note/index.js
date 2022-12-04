import React from 'react'
import styles from './Note.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Note() {
  return (
    <div className={cx('ProductPage__note')}>
        <div className={cx('ProductPage__note--container')}>
          <div className={cx('ProductPage__note--title')}>
            Trái cam mật
          </div>
          <ul className={cx('ProductPage__note--list')}>
            <li className={cx('ProductPage__note--item')}>
              <Link to={'/'}>
                <span>
                  <i className='fa fa-home'></i>
                  {" Trang chủ"}
                </span>
              </Link>
            </li>
            <li className={cx('ProductPage__note--item')}>
              <Link to={'/'}>
                <span>
                  {" Sản phẩm"}
                </span>
              </Link>
            </li>
            <li className={cx('ProductPage__note--item')}>
              <Link to={'/'}>
                <span>
                  {" Trái cây"}
                </span>
              </Link>
            </li>
            <li className={cx('ProductPage__note--item')}>
              <Link to={'/'}>
                <span>
                  {" Táo"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Note