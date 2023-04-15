import React from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

function Banner({ image, items, title, right }) {
    return (
        <div className={cx('banner')}>
            <div className={cx('banner__image')}>
                <img src={image} alt='' />
            </div>
            <div className={cx('banner__content')}>
                <h2 className={cx('banner-content__title')}>{title}</h2>
                <ul className={cx('banner-content__list')}>
                    {
                        items ? items.map(item => <li> {item} </li>) : ''
                    }
                </ul>
                <div className={cx('banner__button')}>
                    Mua sắm ngay bây giờ!
                </div>
            </div>
        </div>
    )
}

export default Banner