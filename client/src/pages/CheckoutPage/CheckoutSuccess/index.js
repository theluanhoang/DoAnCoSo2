import React from 'react'
import styles from './CheckoutPageSuccess.module.scss'
import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)

function CheckoutPageSuccess() {
    const location = useLocation();
    const information = React.useRef();
    information.current = location.state;
    return (
        <div className={cx('CheckoutPageSuccess')}>
            <div className={cx('CheckoutPageSuccess__container')}>
                <div className={cx('CheckoutPageSuccess__main')}>
                    <section className={cx("section section--icon-heading")}>
                        <div className={cx("section__icon unprintable")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px"> <g fill="none" stroke="#8EC343" stroke-width="2"> <circle cx="36" cy="36" r="35" style={{ strokeDasharray: '240px, 240px', strokeDashoffset: '480px' }}></circle> <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: '50px, 50px', strokeDashoffset: '0px' }}></path> </g> </svg>
                        </div>
                        <div className={cx("thankyou-message-container")}>
                            <h2 className={cx("section__title")}>Cảm ơn bạn đã đặt hàng!</h2>
                            <p className={cx("section__text")}>{`Một email xác nhận đã được gửi tới ${information.current.email}.`}<br />Xin vui lòng kiểm tra email của bạn.</p>
                        </div>
                    </section>
                    <section className={cx('section')}>
                        <div className={cx('section__content', 'section__content--bordered')}>
                            <div className={cx("row")}>
                                <div className={cx("col", "col--md-two")}>
                                    <h2>Thông tin mua hàng</h2>
                                    <p>{information.current.customerName}</p>
                                    <p>{information.current.email}</p>
                                    <p>{information.current.phoneNumber}</p>
                                </div>
                                <div className={cx("col", "col--md-two")}>
                                    <h2>Địa chỉ nhận hàng</h2>
                                    <p>{information.current.delivery_address}</p>
                                </div>
                            </div>
                            <div className={cx("row")}>
                                <div className={cx("col", "col--md-two")}>
                                    <h2>Phương thức thanh toán</h2>
                                    <p>{information.current.payments}</p>
                                </div>
                                <div className={cx("col", "col--md-two")}>
                                    <h2>Phương thức vận chuyển</h2>
                                    <p>Phí vận chuyển Việt Nam</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={cx('CheckoutPageSuccess__footer')}>
                        <section className={cx('section', 'unprintable')}>
                            <div className={cx('field__input-btn-wrapper', 'field__input-btn-wrapper--floating', 'field__input-btn-wrapper--mobile')}>
                                <div className={cx('field__input-btn-wrapper', 'field__input-btn-wrapper--floating-left')} style={{ margin: '0 1em' }}>
                                    <p className={cx('step-footer-info')}>
                                        <i className="fa fa-question-circle-o"></i>
                                        <span>
                                            {" Cần hỗ trợ? "}
                                            <Link to={'/contact'} style={{ color: '#000' }}>Liên hệ chúng tôi</Link>
                                        </span>
                                    </p>
                                </div>
                                <div className={cx('field__input-btn-wrapper', 'field__input-btn-wrapper--floating-right')}>
                                    <Link to={'/'} className={cx("btn", "btn--large")} >Tiếp tục mua hàng</Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={cx('CheckoutPageSuccess__sidebar')}>
                    <div className={cx('CheckoutPageSuccess__sidebar--content')}>
                        <div className={cx('order-summary', 'order-summary--bordered', 'order-summary--is-collapsed')}>
                            <div className={cx('order-summary__header')}>
                                <div className={cx('order-summary__title')}>
                                    {" Mã đơn hàng #100003"}
                                    <span className={cx('unprintable')}>(1)</span>
                                </div>
                            </div>
                            <div className={cx('order-summary__sections')}>
                                <div className={cx('order-summary__section', 'order-summary__section--product-list', 'order-summary__section--is-scrollable', 'order-summary--collapsed-element')}>
                                    <table className={cx('product-table')}>
                                        <tbody>
                                            <tr className={cx('product')}>
                                                <td className={cx('product__image')}>
                                                    <div className={cx('product-thumbnail')}>
                                                        <img src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/products/trai-cay/sp5-100x100.jpg" alt="" className={cx('product-thumbnail__image')} />
                                                    </div>
                                                    <span className={cx('product-thumbnail__quantity', 'unprintable')}>1</span>
                                                </td>
                                                <th className={cx('product__description')}></th>
                                                <td className={cx('product__quantity', 'printable-only')}>1</td>
                                                <td className={cx('product__price')}>128000đ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={cx('order-summary__section')}>
                                    <table className={cx('total-line-table')}>
                                        <tbody className={cx('total-line-table__tbody')}>
                                            <tr className={cx('total-line', 'total-line--subtotal')}>
                                                <th className={cx('total-line__name')}>Tạm tính</th>
                                                <th className={cx('total-line__price')}>128000đ</th>
                                            </tr>
                                            <tr className={cx('total-line', 'total-line--shipping-fee')}>
                                                <th className={cx('total-line__name')}>Phí vận chuyển</th>
                                                <td className={cx('total-line__price')}>30000đ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={cx('order-summary__section')}>
                                    <table className={cx('total-line-table')}>
                                        <tbody className={cx('total-line-table__tbody')}>
                                            <tr className={cx('total-line', 'payment-due')}>
                                                <th className={cx('total-line__name')}>
                                                    <span class="payment-due__label-total">Tổng cộng</span>
                                                </th>
                                                <td className={cx('total-line__price')}>
                                                    <span className={cx('payment-due__price')}>158,000đ</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className={cx('order-checking', 'order-checking--bordered', 'order-checking--is-collapsed')}>
                            <div className={cx('order-checking__header')}>
                                <div className={cx('order-checking__title')}>
                                    {" Trạng thái đơn hàng "}
                                    <span className={cx('unprintable')}>(1)</span>
                                </div>
                            </div>
                            <div className={cx('order-checking__sections')}>
                                <div className={cx('order-checking__section', 'order-checking__section--product-list', 'order-checking__section--is-scrollable', 'order-checking--collapse-element')}>
                                    <div className={cx('incidents-list', 'format-expanded')}>
                                        <div className={cx('status-day', 'font-regular')}>
                                            <div className={cx('date', 'border-color', 'font-large')}>
                                                {" 29/11/2022 "}
                                                <div className={cx('timeline__time', 'pull-right')}>
                                                    <span>09:58:14 PM</span>
                                                </div>
                                            </div>
                                            <p className={cx('color-secondary')}>Chờ xác nhận</p>
                                            <p className={cx('color-secondary')}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('CheckoutPageSuccess__container')}>

            </div>
        </div>
    )
}

export default CheckoutPageSuccess