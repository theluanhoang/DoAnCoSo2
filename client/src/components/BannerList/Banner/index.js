import React from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

function Banner({ image, items, title, right }) {
    return (
        <div className={cx('banner')}>
            <div className={cx(right ? 'right' : 'banner__categories')}>
                <img src={image} alt='' />
            </div>
            <div className={cx(right ? 'banner__content--right' :"banner__content")}>
                <h2>{title}</h2>
                <ul>
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