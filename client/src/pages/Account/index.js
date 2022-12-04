import React from 'react'
import styles from './Account.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import Option from '../../components/Account/Option'
import Information from '../../components/Account/Information'
import Password from '../../components/Account/Password'
import WishList from '../../components/Account/Wishlist'
import Newsletter from '../../components/Account/Newsletter'

const cx = classNames.bind(styles)

function Account({ slug }) {
    return (
        <div className={cx('account')}>
            <Navbar />
            <div className={cx('signUp__success--banner')}>
                <img src={'https://sfresh.w2.exdomain.net/image/catalog/sfresh/breadcrumb/bg-breadcrumb.jpg'} alt='Banner' />
            </div>
            <div className={cx('signUp__success--status')}>
                <h3>Tài khoản</h3>
                {
                    slug === 'index' ? (
                        <>
                            <FaHome /> Trang chủ <IoIosArrowForward /> Tài khoản
                        </>
                    ) : ''
                }
                {
                    slug === 'wishlist' ? (
                        <>
                            <FaHome /> Trang chủ <IoIosArrowForward /> Tài khoản <IoIosArrowForward /> Danh sách yêu thích
                        </>
                    ) : ''
                }
                {
                    slug === 'password' ? (
                        <>
                            <FaHome /> Trang chủ <IoIosArrowForward /> Tài khoản <IoIosArrowForward /> Đổi mật khẩu
                        </>
                    ) : ''
                }
                {
                    slug === 'edit' ? (
                        <>
                            <FaHome /> Trang chủ <IoIosArrowForward /> Tài khoản <IoIosArrowForward /> Thông tin tài khoản
                        </>
                    ) : ''
                }
                {
                    slug === 'newsletter' ? (
                        <>
                            <FaHome /> Trang chủ <IoIosArrowForward /> Tài khoản <IoIosArrowForward /> Đăng ký nhận thông báo
                        </>
                    ) : ''
                }
                
            
            </div>
            {
                slug === 'index' ? <Option /> : <></>
            }
            {
                slug === 'wishlist' ? <WishList /> : <></>
            }
            {
                slug === 'password' ? <Password /> : <></>
            }
            {
                slug === 'edit' ? <Information /> : <></>
            }
            {
                slug === 'newsletter' ? <Newsletter /> : <></>
            }
            <Footer />
        </div>
    )
}

export default Account