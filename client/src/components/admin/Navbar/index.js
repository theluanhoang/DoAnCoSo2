import React from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { User } from '../../../assets/img'

const cx = classNames.bind(styles)

function Navbar() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('navbar__wrapper')}>
                <div className={cx('navbar__categories')}>
                    <div className={cx('navbar__categories--icon')}><AiOutlineShoppingCart /></div>
                    <div className={cx('navbar__categories--icon')}>                    <IoMdNotificationsOutline />
                    </div>
                    <div className={cx('navbar__categories--user')}>
                        <img src={User} alt='' />
                        <p>Hi, <span>Admin</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar