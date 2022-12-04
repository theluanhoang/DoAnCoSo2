import React from 'react'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { AiOutlineBook, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { FaProductHunt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { components } from '../../../redux/actions'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Sidebar() {

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar__wrapper')}>
                <div className={cx('sidebar__image')}>
                    <img src='https://sfresh.w2.exdomain.net/image/catalog/sfresh/logo/logo.png' alt='' />
                </div>
                <label className={cx('sidebar__label')}>DASHBOARD</label>
                <ul className={cx('sidebar__categories')}>
                    <li className={cx('sidebar__categories--item')}>
                        <Link to={'/admin/'}>
                            <AiOutlineBook />
                            <p>Ecommerce</p>
                        </Link>
                    </li>
                </ul>
                <label className={cx('sidebar__label')}>PAGES</label>
                <ul className={cx('sidebar__categories')}>
                    <li className={cx('sidebar__categories--item')}>
                        <Link to={'/admin/orders'} >
                            <AiOutlineShoppingCart />
                            <p>Orders</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar__categories--item')}>
                        <Link to={'/admin/customers'} >
                            <AiOutlineUser />
                            <p>Customers</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar__categories--item')}>
                        <Link to={'/admin/products'} >
                            <FaProductHunt />
                            <p>Products</p>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar