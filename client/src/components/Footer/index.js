import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { ImageFooter } from '../../assets/img'
import { FaFacebook, FaTwitter, FaTiktok, FaInstagramSquare } from 'react-icons/fa'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer__main')}>
                <div className={cx('footer__main--container')}>
                    <div className={cx('footer__main--row')}>
                        <div className={cx('footer__main--col')}>
                            <div className={cx('footer__main--section')}>
                                <h4 className={cx('footer__main--title')}>ĐĂNG KÝ NHẬN THÔNG TIN</h4>
                                <p>Đăng ký nhận bản tin để nhận ưu đãi đặc biệt về sản phẩm của FreshFood</p>
                                <div className={cx('footer__input')}>
                                    <input type="text" placeholder="Email" />
                                    <div className={cx('footer__inputIcon')}>
                                        Đăng ký
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('footer__main--col')}>
                            <div className={cx('footer__main--section')}>
                                <Link to={'/'}>
                                    <img src={'https://sfresh.w2.exdomain.net/image/catalog/sfresh/logo/logo.png'} alt='logo' />
                                </Link>
                                <p className={cx('footer__main--desc')}>
                                    Website thương mại điện tử S.Fresh do S Group là đơn vị chủ quản, chịu trách nhiệm và thực hiện các giao dịch liên quan mua sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
                                </p>
                                <img src={ImageFooter} alt="imageProduct" />
                            </div>
                        </div>
                        <div className={cx('footer__main--col')}>
                            <div className={cx('footer__main--section')}>
                                <h4 className={cx('footer__main--title')}>LIÊN HỆ</h4>
                                <div className={cx('footer__main--contact')}>
                                    <p><span>Địa chỉ: </span>123 Nguyễn Minh Châu, P.Hòa Hải, Q. Ngũ Hành Sơn, Đà Nẵng</p>
                                    <p><span>Điện thoại: </span>(+84) 379 124 695</p>
                                    <p><span>Email: </span>luanht.21it@vku.udn.vn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer__copyright')}>
                <div className={cx('footer__copyright--container')}>
                    <div className={cx('footer__copyright--row')}>
                        <div className={cx('footer__copyright--col')}>
                            © Copyright 2022 S.Fresh.
                        </div>
                        <ul className={cx('footer__copyright--col')}>
                            <li>
                                <Link to={'/'} >
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} >
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} >
                                    <FaInstagramSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} >
                                    <FaTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer