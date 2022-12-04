import React from 'react'
import styles from './News.module.scss'
import classNames from 'classnames/bind'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function News({ image, desc, user, time }) {
    return (
        <div className={cx('news__list--item')}>
            <Link to={''}>
                <img src={image} alt='' className={cx('news__list--itemImage')} />
            </Link>
            <div className={cx('news__list--itemContent')}>
                {
                    desc ? <h2>{desc}</h2> : <></>
                }
                {
                    user && time && (
                        <div>
                            <AiOutlineUser />
                            <span>{user} | {time}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default News