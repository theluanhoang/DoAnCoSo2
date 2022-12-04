import React from 'react'
import styles from './SignIn.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { FormSignIn } from '../../components/Form'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function SignIn() {
    return (
        <div className={cx('signIn')}>
            <Navbar />
            <div className={cx('signIn__status')}>
                <div className={cx('signIn__status--item')}>
                    <FaHome className={cx('signIn__icon')} /> Trang chủ <IoIosArrowForward className={cx('signIn__icon')} /> Tài khoản <IoIosArrowForward className={cx('signIn__icon')} /> Đăng nhập
                </div>
            </div>
            <div className={cx('signIn__content')}>
                <div className={cx('signIn__content--container')}>
                    <FormSignIn />
                    <div className={cx('right')}>
                        <h1 className={cx('form__title')}>QUYỀN LỢI THÀNH VIÊN</h1>
                        <div className={cx('form__line')}></div>
                        <div className={cx('right__content')}><p>Bằng việc tạo tài khoản bạn có thể mua sắm nhanh hơn, theo dõi trạng thái đơn hàng, và theo dõi đơn hàng mà bạn đã đặt.</p></div>
                        <Link to="/sign-up" className={cx('form__btn', 'btnSign')}>Đăng ký</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn